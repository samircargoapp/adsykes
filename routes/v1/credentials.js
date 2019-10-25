const express = require('express')
const credentialsRoutes = express.Router()
// validator
const {
  validateCredentials
} = require('../../validators/credentials')
// controllers
const credentialsControllers = require('../../controllers/credentials')

// Definiendo rutas de credenciales
credentialsRoutes
  .post('/api/v1/credentials/signin', validateCredentials, credentialsControllers.signin)
  .get('/api/v1/users', credentialsControllers.listUsers)

module.exports = credentialsRoutes