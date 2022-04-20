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

You can configure the logger by passing in these options in the constructor:

```js
const { Logger } = require("@wizo06/logger");
const logger = new Logger({
  printHostname: true,
  printUNIXTimestamp: true,
  printHumanReadableTimestamp: true,
  printFileName: true,
  printLineNumber: true,
  printLogLevel: true,
});

logger.info(`Hello, World!`);
logger.success("Hello, World!");
logger.debug("Hello, World!");
logger.warn("Hello, World!");
logger.error("Hello, World!");
logger.info({ foo: "bar" });
```

Output:

```
$ node test.js
[hanabira] [1650427042624|2022.04.19|23:57:22|UTC-04:00] [loader:1103] [INFO] Hello, World!
[hanabira] [1650427042627|2022.04.19|23:57:22|UTC-04:00] [loader:1103] [SUCCESS] Hello, World!
[hanabira] [1650427042627|2022.04.19|23:57:22|UTC-04:00] [loader:1103] [DEBUG] Hello, World!
[hanabira] [1650427042627|2022.04.19|23:57:22|UTC-04:00] [loader:1103] [WARN] Hello, World!
[hanabira] [1650427042628|2022.04.19|23:57:22|UTC-04:00] [loader:1103] [ERROR] Hello, World!
[hanabira] [1650427042628|2022.04.19|23:57:22|UTC-04:00] [loader:1103] [INFO] { foo: 'bar' }
```

# Full Output Format

```
[<hostname>] [<unix timestamp>|<human readable timestamp>] [<file name>:<line number>] [<log level>]
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
