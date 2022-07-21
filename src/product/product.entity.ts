import { CateGory } from 'src/category/category.entity';
import { Order } from 'src/order/order.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titile: string;

  @Column()
  desc: string;

  @Column()
  price: number;

  @ManyToOne(() => CateGory, (category) => category.products)
  category: CateGory;

  @ManyToMany(() => Order, (orders) => orders.products)
  orders: Order[];
}
