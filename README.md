# About

An informative console logger for Node.js.

# Installation

```bash
npm i @wizo06/logger
```

# Quick start

Filename `test.js` with content:

```js
const { Logger } = require("@wizo06/logger");
const logger = new Logger();

logger.info(`Hello, World!`);
logger.success("Hello, World!");
logger.debug("Hello, World!");
logger.warn("Hello, World!");
logger.error("Hello, World!");
logger.info({ foo: "bar" });
```

Output:

```console
$ node test.js
[2022.04.19|23:54:07|UTC-04:00] [INFO] Hello, World!
[2022.04.19|23:54:07|UTC-04:00] [SUCCESS] Hello, World!
[2022.04.19|23:54:07|UTC-04:00] [DEBUG] Hello, World!
[2022.04.19|23:54:07|UTC-04:00] [WARN] Hello, World!
[2022.04.19|23:54:07|UTC-04:00] [ERROR] Hello, World!
[2022.04.19|23:54:07|UTC-04:00] [INFO] { foo: 'bar' }
```

# Configuration

By default, the constructor initializes the properties with these values:

```js
const { Logger } = require("@wizo06/logger");
const logger = new Logger({
  printHostname = false, 
  printUNIXTimestamp = false, 
  printHumanReadableTimestamp = true, 
  stackDepth = 4, 
  printFileName = false, 
  printFunctionName = true,
  printLineNumber = true, 
  printLogLevel = true 
});

logger.info(`Hello, World!`);
logger.success("Hello, World!");
logger.debug("Hello, World!");
logger.warn("Hello, World!");
logger.error("Hello, World!");
logger.info({ foo: "bar" });
```

Output:

```console
$ node test.js
[hanabira] [1650427853790|2022.04.20|00:10:53|UTC-04:00] [test.js:12] [INFO] Hello, World!
[hanabira] [1650427853793|2022.04.20|00:10:53|UTC-04:00] [test.js:13] [SUCCESS] Hello, World!
[hanabira] [1650427853794|2022.04.20|00:10:53|UTC-04:00] [test.js:14] [DEBUG] Hello, World!
[hanabira] [1650427853794|2022.04.20|00:10:53|UTC-04:00] [test.js:15] [WARN] Hello, World!
[hanabira] [1650427853794|2022.04.20|00:10:53|UTC-04:00] [test.js:16] [ERROR] Hello, World!
[hanabira] [1650427853794|2022.04.20|00:10:53|UTC-04:00] [test.js:17] [INFO] { foo: 'bar' }
```

# Full Output Format

```
[<hostname>] [<unix timestamp>|<human readable timestamp>] [<file name>:<function_name>:<line number>] [<log level>]
```

# Available styling

```js
const { colors, formats } = require("@wizo06/logger");

colors.BLACK;
colors.RED;
colors.GREEN;
colors.YELLOW;
colors.BLUE;
colors.MAGENTA;
colors.CYAN;
colors.WHITE;

formats.RESET;
formats.BRIGHT;
formats.DIM;
formats.UNDERSCORE;
formats.BLINK;
formats.REVERSE;
formats.HIDDEN;
```

## Example

```js
logger.info(`Downloading ${formats.UNDERSCORE}${filename}${formats.RESET}`);
```
