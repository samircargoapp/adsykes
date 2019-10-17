require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')
const morgan = require('morgan')
const app = express()

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
      res.status(200).send({ message: 'options' })
    } else {
      next()
    }
}

app.use(allowCrossDomain)
// parse application/x-www-form-urlencoded & parse application/json
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(morgan('tiny'))
app.use(
    routes.credentialsRoutes
)

app.listen(process.env.PORT, ()=>{
    console.log('Successfull service', process.env.PORT);
})