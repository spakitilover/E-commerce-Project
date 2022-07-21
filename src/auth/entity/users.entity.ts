import { Contact } from 'src/contact/contact.entity';
import { Order } from 'src/order/order.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Contact, (contact) => contact.user)
  contact: Contact;

  @OneToMany(() => Order, (order) => order.users)
  order: Order[];

  @Column()
  usersId: number;
}
