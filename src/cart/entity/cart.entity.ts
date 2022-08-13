import { Products } from 'src/product/entity/product.entity';
import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  subtotal: number;

  @ManyToOne(() => Users, (user) => user.cart)
  user: Users;

  @ManyToOne(() => Products, (product) => product.cart)
  product: Products;
}
