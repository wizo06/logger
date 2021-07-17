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
```
Output:
```
[PC-1234] [2021.07.17|18:56:21|UTC-04:00] [test.js:3] [INFO] Hello, World!
[PC-1234] [2021.07.17|18:56:21|UTC-04:00] [test.js:4] [SUCCESS] Hello, World!
[PC-1234] [2021.07.17|18:56:21|UTC-04:00] [test.js:5] [DEBUG] Hello, World!
[PC-1234] [2021.07.17|18:56:21|UTC-04:00] [test.js:6] [WARNING] Hello, World!
[PC-1234] [2021.07.17|18:56:21|UTC-04:00] [test.js:7] [ERROR] Hello, World!
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