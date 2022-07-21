import { Users } from 'src/auth/entity/users.entity';
import { Product } from 'src/product/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dateCreated: Date;

  @Column()
  total: number;

  @ManyToOne(() => Users, (users) => users.order)
  users: Users;

  @ManyToMany(() => Product, (products) => products.orders)
  products: Product[];
}
