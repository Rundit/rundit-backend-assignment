import cors from 'cors'
import * as http from 'http'
import * as path from 'path'
import express from 'express'
import { configure as configureMetrics } from './metrics'

export class ApiServer {
  public PORT: number = +process.env.PORT || 3000

  private readonly app: express.Application
  private server: http.Server = null

  constructor() {
    this.app = express()
    this.config()
    configureMetrics(this.app, '/api')
  }

  /**
   * Start the server
   */
  public async start() {
    return new Promise<any>((resolve) => {
      this.server = this.app.listen(this.PORT, () => {
        console.log(`Listening to http://127.0.0.1:${this.PORT}`)
        return resolve(true)
      })
    })
  }

  /**
   * Stop the server (if running).
   * @returns {Promise<boolean>}
   */
  public async stop(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.server) {
        this.server.close(() => {
          return resolve(true)
        })
      } else {
        return resolve(true)
      }
    })
  }

  /**
   * Configure the express app.
   */
  private config(): void {
    // Native Express configuration
    this.app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))
    this.app.use(cors())
  }
}