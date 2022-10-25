import createHttpError from 'http-errors'
import { GET, Path, QueryParam } from 'typescript-rest'
import { CompanySummary } from './dto/summary/summary.dto'

@Path('/summaries')
export class SummariesController {

  @GET
  async getCompanySummary(
    @QueryParam('from') fromDate?: string, // YYYY-MM-DD
    @QueryParam('to') toDate?: string, // YYYY-MM-DD
  ): Promise<CompanySummary> {
    // Implement controller
    throw createHttpError(501, 'Not implemented')
  }
}