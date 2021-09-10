const app = require('./src/app')

let port = process.env.SERVER_PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Example app listening at http://localhost:${port}`)
})