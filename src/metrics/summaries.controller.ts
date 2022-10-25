import { GET, Path, PathParam, QueryParam } from 'typescript-rest'
import { CompanySummary } from './dto/summary/summary.dto'
import { Period } from './types'

@Path('/summaries')
export class SummariesController {

  @GET
  async getCompanySummary(
    @QueryParam('from') fromDate?: string, // YYYY-MM-DD
    @QueryParam('to') toDate?: string, // YYYY-MM-DD
  ): Promise<CompanySummary> {
    // Implement controller
    return null
  }
}