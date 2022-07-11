const { hostname } = require("os");
const { inspect } = require("util");
const { basename } = require("path");
const { CYAN, GREEN, MAGENTA, YELLOW, RED } = require("./colors");
const { RESET } = require("./formats");

module.exports.createPrintString = (printHostname, printUNIXTimestamp, printHumanReadableTimestamp, stackDepth, printFileName, printFunctionName, printLineNumber, printLogLevel, logLevel, ...data) => {
  const msg = [];

  if (printHostname) {
    msg.push(`[${hostname()}]`);
  }

  if (printUNIXTimestamp || printHumanReadableTimestamp) {
    msg.push(`[${getTimestamp(printUNIXTimestamp, printHumanReadableTimestamp)}]`);
  }

  if (printFileName) {
    msg.push(`[${getCaller(stackDepth, printLineNumber, printFunctionName)}]`);
  }

  if (printLogLevel) {
    msg.push(`[${formatLogLevel(logLevel)}]`);
  }

  for (const d of data) {
    if (d instanceof Object) {
      msg.push(inspect(d, false, null, true));
    } else {
      msg.push(d);
    }
  }

  return msg.join(" ");
};

const getTimestamp = (printUNIXTimestamp, printHumanReadableTimestamp) => {
  const { year, month, date, hour, min, sec, tz, unix } = formatDate(new Date());
  const humanReadableTimestamp = `${year}.${month}.${date}|${hour}:${min}:${sec}|UTC${tz}`;

  if (printUNIXTimestamp && printHumanReadableTimestamp) {
    return `${unix}|${humanReadableTimestamp}`;
  }
  if (printUNIXTimestamp) {
    return `${unix}`;
  }
  return humanReadableTimestamp;
};

const getCaller = (stackDepth, lineNumber, printFunctionName) => {
  // at functionName (/path/to/file.js:123:456)
  const frame = new Error().stack.split("\n")[stackDepth].trim();

  // functionName or ()
  const functionName = (frame.split(' ').length === 3) ? frame.split(' ')[1] : '()';

  // file.js:123:456
  const fileName_line_column = basename(frame).replace(")", "");

  if (lineNumber && printFunctionName) {
    // file.js:functionName:123
    return `${fileName_line_column.split(":")[0]}:${functionName}:${fileName_line_column.split(":")[1]}`;
  }

  if (lineNumber && !printFunctionName) {
    // file.js:123
    return `${fileName_line_column.split(":")[0]}:${fileName_line_column.split(":")[1]}`;
  }

  if (!lineNumber && printFunctionName) {
    // file.js:functionName
    return `${fileName_line_column.split(":")[0]}:${functionName}`;
  }
  
  // file.js
  return `${fileName_line_column.split(":")[0]}`;
};

const formatLogLevel = (logLevel) => {
  if (logLevel === "INFO") {
    return `${CYAN}${logLevel}${RESET}`;
  }
  if (logLevel === "SUCCESS") {
    return `${GREEN}${logLevel}${RESET}`;
  }
  if (logLevel === "DEBUG") {
    return `${MAGENTA}${logLevel}${RESET}`;
  }
  if (logLevel === "WARN") {
    return `${YELLOW}${logLevel}${RESET}`;
  }
  if (logLevel === "ERROR") {
    return `${RED}${logLevel}${RESET}`;
  }
};

const formatDate = (now) => {
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let tz = (now.getTimezoneOffset() / 60) * -1;
  const unix = now.getTime();

  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  if (tz > 0 && tz < 10) tz = `+0${Math.abs(tz)}:00`;
  if (tz > 0 && tz >= 10) tz = `+${Math.abs(tz)}:00`;
  if (tz < 0 && tz > -10) tz = `-0${Math.abs(tz)}:00`;
  if (tz < 0 && tz <= -10) tz = `-${Math.abs(tz)}:00`;

  return { year, month, date, hour, min, sec, tz, unix };
};
