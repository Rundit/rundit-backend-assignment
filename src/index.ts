import { start } from './start'

start().catch((err: Error) => {
    console.error(`Error starting server: ${err.message}`)
    process.exit(-1)
  })