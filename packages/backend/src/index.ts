import './pre-start' // Must be the first import
import logger from 'jet-logger'
import { collections, connectToDatabase } from './db'

import EnvVars from '@src/common/EnvVars'
import server from './server'

// **** Run **** //

const SERVER_START_MSG = 'Express server started on port: ' + EnvVars.Port.toString()

connectToDatabase()
  .then(async () => {
    server.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG))
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error)
    process.exit()
  })
