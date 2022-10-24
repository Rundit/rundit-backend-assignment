import express, { Application } from 'express'
import { MetricsController } from './metric.controller'
import { SummariesController } from './summaries.controller'
import { Server } from 'typescript-rest'

const routes = [MetricsController, SummariesController]

export const configure = (app: Application, rootPath: string): void => {
  const appRouter = express.Router()
  app.use(rootPath, appRouter)
  Server.ignoreNextMiddlewares(true)
  Server.buildServices(appRouter, ...routes)
}
