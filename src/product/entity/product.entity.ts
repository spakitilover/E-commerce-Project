import { Cart } from 'src/cart/entity/cart.entity';
import { Category } from 'src/category/entity/category.entity';
import { Orders } from 'src/order/entity/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  update_at: Date;

  @ManyToMany(() => Orders, (orders) => orders.products)
  orders: Orders[];

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn()
  category: Category;

  @OneToMany(() => Cart, (cart) => cart.product)
  cart: Cart[];
}
