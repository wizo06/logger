const { exec } = require('child_process')
exec('node test.js', (err, stdout, stderr) => {
  console.log('--- stdout ---')
  console.log(stdout)
  console.log()
  console.log('--- stderr ---')
  console.log(stderr)
})