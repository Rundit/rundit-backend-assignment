import { Path, POST } from 'typescript-rest'
import createHttpError from 'http-errors'
import { MetricCreateDto, MetricResponseDto } from './dto/metric/metric.dto'

@Path('/metrics')
export class MetricsController {

  @POST
  async createMetric(body: MetricCreateDto[]): Promise<MetricResponseDto[]> {
    // Implement controller
    throw createHttpError(501, 'Not implemented')
   }
}
