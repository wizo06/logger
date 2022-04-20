const { Logger, colors, formats } = require("./lib/index.js");
console.log(colors);
console.log(formats);
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
