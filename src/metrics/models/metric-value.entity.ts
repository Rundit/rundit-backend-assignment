import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class MetricValueEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('numeric', { nullable: false })
  value: number

  // Implement the rest
}