import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('metric')
export class MetricEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column('varchar', { nullable: false })
  name: string

  // Implement the rest
}
