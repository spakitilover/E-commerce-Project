import { CateGory } from 'src/category/category.entity';
import { Order } from 'src/order/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  titile: string;

  @Column()
  desc: string;

  @Column()
  price: number;

  @Column()
  create_at: Date;

  @ManyToOne(() => CateGory, (category) => category.products)
  @JoinColumn()
  category: CateGory;

  @ManyToMany(() => Order, (orders) => orders.products)
  orders: Order[];
}
