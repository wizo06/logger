# About

An informative console logger for Node.js.

Inspired by [Ayumi](https://github.com/shunjuu/Ayumi).

# Installation
```bash
npm i @wizo06/logger
```

# Quick start
Filename `test.js` with content:
```js
 1 const logger = require('@wizo06/logger')
 2
 3 logger.info('Hello, World!')
 4 logger.success('Hello, World!')
 5 logger.debug('Hello, World!')
 6 logger.warning('Hello, World!')
 7 logger.error('Hello, World!')
 8
 9 logger.info('Hello, World!', { stackDepth: 4 })
10 logger.success('Hello, World!', { stackDepth: 4 })
11 logger.debug('Hello, World!', { stackDepth: 4 })
12 logger.warning('Hello, World!', { stackDepth: 4 })
13 logger.error('Hello, World!', { stackDepth: 4 })
```
Output:
```
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [test.js:3] [INFO] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [test.js:4] [SUCCESS] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [test.js:5] [DEBUG] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [test.js:6] [WARNING] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [test.js:7] [ERROR] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [loader:1101] [INFO] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [loader:1101] [SUCCESS] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [loader:1101] [DEBUG] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [loader:1101] [WARNING] Hello, World!
[PC-1234] [2021.08.23|00:00:06|UTC-04:00] [loader:1101] [ERROR] Hello, World!
```

## Output format
```
[<hostname>] [<timestamp>] [<file>:<line number>] [<log level>]
```
# Available styling

```js
logger.color.black
logger.color.red
logger.color.green
logger.color.yellow
logger.color.blue
logger.color.magenta
logger.color.cyan
logger.color.white

logger.format.reset
logger.format.bright
logger.format.dim
logger.format.underscore
logger.format.blink
logger.format.reverse
logger.format.hidden
```

## Example

```js
logger.info(`Downloading ${logger.color.yellow}${filename}`)
```