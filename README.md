# About

An informative logger to the console for Node.js.

Inspired by [Ayumi](https://github.com/shunjuu/Ayumi).

# Installation
```bash
npm i @wizo06/logger
```

# Quick start
Filename `index.js` with content:
```js
1 const logger = require('logger')
2
3 logger.info('Hello, World!') 
4 logger.success(`This is a success message`)
5 logger.debug(`This is a debug message`)
6 logger.warning(`This is a warning message`)
7 logger.error(`This is an error message`)
```
Output:
```
[2021.07.01|16:03:55|UTC] [index.js:3] [INFO] Hello, World!
[2021.07.01|16:03:55|UTC] [index.js:4] [SUCCESS] Hello, World!
[2021.07.01|16:03:55|UTC] [index.js:5] [DEBUG] Hello, World!
[2021.07.01|16:03:55|UTC] [index.js:6] [WARNING] Hello, World!
[2021.07.01|16:03:55|UTC] [index.js:7] [ERROR] Hello, World!
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