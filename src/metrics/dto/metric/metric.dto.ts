import { MetricValueCreateDto, MetricValueDto } from './metric-value.dto'

export class MetricResponseDto {
  id: string
  name: string
  company: string
  values: MetricValueDto[]
}

export class MetricCreateDto {
  name: string
  company: string
  values: MetricValueCreateDto[]
}
