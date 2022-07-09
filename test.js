const { Logger } = require("./lib/index.js");

const logger = new Logger({
  printHostname: true, 
  printUNIXTimestamp: true, 
  printHumanReadableTimestamp: true, 
  stackDepth: 4, 
  printFileName: true, 
  printFunctionName: true,
  printLineNumber: true, 
  printLogLevel: true 
});

logger.info(`Hello, World!`);
logger.success("Hello, World!");
logger.debug("Hello, World!");
logger.warn("Hello, World!");
logger.error("Hello, World!");

logger.info();
logger.info({ foo: 'bar' }, 'foo', 42, false, Date(), ['foo', 'bar'], new Map());

function myFunc() { logger.info('foo bar baz') };
myFunc();