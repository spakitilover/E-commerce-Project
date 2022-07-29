import { Products } from 'src/product/entity/product.entity';
import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  update_at: Date;

  @ManyToOne(() => Users, (users) => users.orders)
  @JoinColumn()
  user: Users;

  @ManyToMany(() => Products, (products) => products.orders)
  @JoinTable({ name: 'order_details' })
  products: Products[];
}
