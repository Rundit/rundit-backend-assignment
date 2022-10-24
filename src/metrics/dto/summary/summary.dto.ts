import { Period } from '../../types'

export class SummaryValue {
  date: string // YYYY-MM-DD
  period: Period
  average: number
  total: number
}

export class MetricSummary {
  metric: string
  values: SummaryValue[]
}

export class CompanySummary {
  company: string
  metrics: MetricSummary[]
}