import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entiy';

@Entity({ name: 'image' })
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', nullable: true})
  tags: string;

  @Column({type: 'varchar'})
  name: string;

  @Column({type: 'boolean', default: true})
  approved: boolean;

  @ManyToOne(() => User, (user) => user.images)
  user: User;

}