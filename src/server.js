const handler = require('serve-handler')
const http = require('http')

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/zeit/serve-handler#options
  const options = {
    'public': 'dist',
    'rewrites': [
      { 'source': '/**', 'destination': '/index.html' }
    ]
  }
  return handler(request, response, options)
})

const port = process.env.PROD_PORT || 3001
const hostname = '0.0.0.0'
server.listen(port, hostname, () => {
  console.log(`Running at http://${hostname}:${port}`)
})
