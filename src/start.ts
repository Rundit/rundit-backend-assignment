import { ApiServer } from './api-server'
import { AppDataSource } from './data-source'

export const start =  async(): Promise<void> => {
  await AppDataSource.initialize()
  const apiServer = new ApiServer()
  await apiServer.start()

  const graceful = async () => {
    await apiServer.stop()
    process.exit(0)
  };

  // Stop graceful
  process.on('SIGTERM', graceful)
  process.on('SIGINT', graceful)
}