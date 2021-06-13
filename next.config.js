const withTM = require('next-transpile-modules')([
  'fullcalendar',
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  "@fullcalendar/interaction",
])

module.exports = withTM({
  trailingSlash: true,
  env: {
    testKey: process.env.TEST_KEY
  }
})
