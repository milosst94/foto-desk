import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'watermark' })
export class Watermark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar'})
  name: string;

  @Column({type: 'varchar', nullable: true})
  description: string;

  @Column({type: 'boolean', default: false})
  isDefault: boolean;

}