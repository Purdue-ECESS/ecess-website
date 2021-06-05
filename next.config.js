const withTM = require('next-transpile-modules')([
  'fullcalendar',
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  "@fullcalendar/interaction",
])

module.exports = withTM({
  basePath: '/ecea',
  trailingSlash: true,
  env: {
    testKey: process.env.TEST_KEY
  }
})
