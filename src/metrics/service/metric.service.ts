import { Repository } from 'typeorm'
import { MetricEntity } from '../models/metric.entity'
import { MetricValueEntity } from '../models/metric-value.entity'
import { AppDataSource } from '../../data-source'

export class MetricService {
  private static _instance: MetricService
  private metricRepository: Repository<MetricEntity>
  private metricValueRepository: Repository<MetricValueEntity>

  private constructor() {
    this.metricRepository = AppDataSource.getRepository(MetricEntity)
    this.metricValueRepository = AppDataSource.getRepository(MetricValueEntity)
  }

  static getInstance(): MetricService {
    MetricService._instance ||= new MetricService()
    return MetricService._instance
  }

  // Implement service methods

}