const { basename } = require('path')

function getCallingDetails() {  
  const err = new Error()
  const frames = err.stack.split('\n')
  const thirdFrame = frames[3].trim()
  
  const fileName_line_column = basename(thirdFrame).replace(')', '')
  const fileName = fileName_line_column.split(':')[0]
  const line = fileName_line_column.split(':')[1]

  return `${fileName}:${line}`
}

function formatDate(now) {
  const year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let min = now.getMinutes()
  let sec = now.getSeconds()

  month = (month < 10) ? `0${month}` : month
  date = (date < 10) ? `0${date}` : date
  hour = (hour < 10) ? `0${hour}` : hour
  min = (min < 10) ? `0${min}` : min
  sec = (sec < 10) ? `0${sec}` : sec

  return { year, month, date, hour, min, sec }
}

module.exports = logger = {
  color: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
  },

  format: {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
    reverse: '\x1b[7m',
    hidden: '\x1b[8m',
  },

  success: (data = '') => {
    const now = new Date()
    const { year, month, date, hour, min, sec } = formatDate(now)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timestamp = `${year}.${month}.${date}|${hour}:${min}:${sec}|${tz}`
    const loglevel = `${logger.color.green}SUCCESS${logger.format.reset}`

    console.log(`[${timestamp}] [${getCallingDetails()}] [${loglevel}] ${data}${logger.format.reset}`)
  },

  info: (data = '') => {
    const now = new Date()
    const { year, month, date, hour, min, sec } = formatDate(now)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timestamp = `${year}.${month}.${date}|${hour}:${min}:${sec}|${tz}`
    const loglevel = `${logger.color.cyan}INFO${logger.format.reset}`

    console.log(`[${timestamp}] [${getCallingDetails()}] [${loglevel}] ${data}${logger.format.reset}`)
  },

  debug: (data = '') => {
    const now = new Date()
    const { year, month, date, hour, min, sec } = formatDate(now)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timestamp = `${year}.${month}.${date}|${hour}:${min}:${sec}|${tz}`
    const loglevel = `${logger.color.magenta}DEBUG${logger.format.reset}`

    console.log(`[${timestamp}] [${getCallingDetails()}] [${loglevel}] ${logger.format.dim}${data}${logger.format.reset}`)
  },

  warning: (data = '') => {
    const now = new Date()
    const { year, month, date, hour, min, sec } = formatDate(now)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timestamp = `${year}.${month}.${date}|${hour}:${min}:${sec}|${tz}`
    const loglevel = `${logger.color.yellow}WARNING${logger.format.reset}`

    console.log(`[${timestamp}] [${getCallingDetails()}] [${loglevel}] ${data}${logger.format.reset}`)
  },

  error: (data = '') => {
    const now = new Date()
    const { year, month, date, hour, min, sec } = formatDate(now)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    const timestamp = `${year}.${month}.${date}|${hour}:${min}:${sec}|${tz}`
    const loglevel = `${logger.color.red}ERROR${logger.format.reset}`

    console.log(`[${timestamp}] [${getCallingDetails()}] [${loglevel}] ${data}${logger.format.reset}`)
  },
}
