//server script nodejs

const http = require('http')

const port = process.env.PORT || 3000

const path = require('path')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
})

const test_pdf = ''
path.dirname(test_pdf) // 
path.basename(test_pdf) // ctpd.pdf
path.extname(test_pdf) // .pdf



server.listen(port, () => {
    console.log('Server running at port ${port}')
})
