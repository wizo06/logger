const { createPrintString } = require("./util");

exports.colors = require("./colors");
exports.formats = require("./formats");
exports.Logger = class Logger {
  #printHostname;
  #printUNIXTimestamp;
  #printHumanReadableTimestamp;
  #stackDepth;
  #printFileName;
  #printFunctionName;
  #printLineNumber;
  #printLogLevel;

  constructor({ 
    printHostname = false, 
    printUNIXTimestamp = false, 
    printHumanReadableTimestamp = true, 
    stackDepth = 4, 
    printFileName = false, 
    printFunctionName = true,
    printLineNumber = true, 
    printLogLevel = true 
  } = {}) {
    this.#printHostname = printHostname;
    this.#printUNIXTimestamp = printUNIXTimestamp;
    this.#printHumanReadableTimestamp = printHumanReadableTimestamp;
    this.#stackDepth = stackDepth;
    this.#printFileName = printFileName;
    this.#printFunctionName = printFunctionName;
    this.#printLineNumber = printLineNumber;
    this.#printLogLevel = printLogLevel;
  }

  info = (...data) => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printFunctionName, this.#printLineNumber, this.#printLogLevel, "INFO", ...data);
    console.info(msg);
  };

  success = (...data) => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printFunctionName, this.#printLineNumber, this.#printLogLevel, "SUCCESS", ...data);
    console.log(msg);
  };

  debug = (...data) => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printFunctionName, this.#printLineNumber, this.#printLogLevel, "DEBUG", ...data);
    console.debug(msg);
  };

  warn = (...data) => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printFunctionName, this.#printLineNumber, this.#printLogLevel, "WARN", ...data);
    console.warn(msg);
  };

  error = (...data) => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printFunctionName, this.#printLineNumber, this.#printLogLevel, "ERROR", ...data);
    console.error(msg);
  };
};
