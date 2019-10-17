// packages
const { validationResult } = require('express-validator')

// Constants
const constants = require('../constants/Messages')
let entity = 'credenciales'

exports.signin = async (req, res) => {
    try {
      const errors = validationResult(req)
      if (errors.isEmpty()) {

        // let result = await credentialsServices.signin(req)
        let result = req.body
        res.status(200).send({ code: 1, message: constants.messages.signin.success[1], response: result })

      } else {
        res.status(400).send({ code: 4, message: constants.messages.signin.error[1], error: errors.array() })
      }
    } catch (error) {
        res.status(400).send({ code: 0, message: constants.messages.signin.error[1], error: error })
    }
}