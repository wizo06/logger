const { createPrintString } = require("./util");

exports.colors = require("./colors");
exports.formats = require("./formats");
exports.Logger = class Logger {
  #stackDepth;
  #printHostname;
  #printUNIXTimestamp;
  #printHumanReadableTimestamp;
  #printFileName;
  #printLineNumber;
  #printLogLevel;

  constructor({ stackDepth = 4, printHostname = false, printUNIXTimestamp = false, printHumanReadableTimestamp = true, printFileName = false, printLineNumber = false, printLogLevel = true } = {}) {
    this.#stackDepth = stackDepth;
    this.#printHostname = printHostname;
    this.#printUNIXTimestamp = printUNIXTimestamp;
    this.#printHumanReadableTimestamp = printHumanReadableTimestamp;
    this.#printFileName = printFileName;
    this.#printLineNumber = printLineNumber;
    this.#printLogLevel = printLogLevel;
  }

  info = (data = "") => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printLineNumber, this.#printLogLevel, "INFO", data);
    console.info(msg);
  };

  success = (data = "") => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printLineNumber, this.#printLogLevel, "SUCCESS", data);
    console.log(msg);
  };

  debug = (data = "") => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printLineNumber, this.#printLogLevel, "DEBUG", data);
    console.debug(msg);
  };

  warn = (data = "") => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printLineNumber, this.#printLogLevel, "WARN", data);
    console.warn(msg);
  };

  error = (data = "") => {
    const msg = createPrintString(this.#printHostname, this.#printUNIXTimestamp, this.#printHumanReadableTimestamp, this.#stackDepth, this.#printFileName, this.#printLineNumber, this.#printLogLevel, "ERROR", data);
    console.error(msg);
  };
};
