var fs = require('fs')
var path = require('path')
var ICS = require('ics')

var ics = new ICS()

var out = ics.buildEvent({
  uid: `${Date.now()}`,
  start: '2017-06-26 08:00',
  timeZone: 'America/Los_Angeles',
  title: 'adToken Launch',
  description: 'Token Launch Sale for adToken',
  url: 'https://adtoken.com',
  alarms:[
    { action: 'DISPLAY', trigger: '-PT24H', description: 'Reminder', repeat: true, duration: 'PT15M' },
    { action: 'AUDIO', trigger: '-PT30M' }
  ]
})

var outfile = path.resolve(__dirname, '../static/calendar/reminder.ics')

console.log(out)

fs.writeFileSync(outfile, out)
console.log('---')
console.log('saved to', outfile)
