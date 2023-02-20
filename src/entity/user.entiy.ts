import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Image} from './image.entity'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  firstName: string;

  @Column({type: 'varchar'})
  lastName: string;

  @Column({type: 'varchar' })
  displayName: string;

  @Column({type: 'varchar'})
  email: string;

  @Column({type: 'varchar'})
  password: string;

  @Column({type: 'boolean', default: true})
  approved: boolean;

  @Column({type: 'varchar'})
  role: string;

  @OneToMany(() => Image, (image) => image.user)
  images: Image[];

}


