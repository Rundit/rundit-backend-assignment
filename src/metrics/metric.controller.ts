import { Path, POST } from 'typescript-rest'
import { MetricCreateDto, MetricResponseDto } from './dto/metric/metric.dto'

@Path('/metrics')
export class MetricsController {

  @POST
  async createMetric(body: MetricCreateDto[]): Promise<MetricResponseDto[]> {
    return null
   }
}
