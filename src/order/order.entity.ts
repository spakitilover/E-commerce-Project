import { Users } from 'src/auth/entity/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
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
}
