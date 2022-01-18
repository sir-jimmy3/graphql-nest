import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { JoinColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column({ name: 'user_id' })
  @Field(() => ID)
  userId: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  @Field(() => String)
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone', default: null })
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.books)
  @JoinColumn({ name: 'user_id' })
  @Field(() => User)
  user: User;
}
