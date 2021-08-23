const logger = require('./index.js')

logger.info('Hello, World!')
logger.success('Hello, World!')
logger.debug('Hello, World!')
logger.warning('Hello, World!')
logger.error('Hello, World!')

logger.info('Hello, World!', { stackDepth: 4 })
logger.success('Hello, World!', { stackDepth: 4 })
logger.debug('Hello, World!', { stackDepth: 4 })
logger.warning('Hello, World!', { stackDepth: 4 })
logger.error('Hello, World!', { stackDepth: 4 })
