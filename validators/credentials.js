// package
const { check } = require('express-validator')

// Message constants
const constants = require('../constants/Messages')

exports.validateCredentials = [
    check('email')
      .isString().withMessage(constants.messages.validations.string)
      .exists().withMessage(constants.messages.validations.exist)
      .not().withMessage(constants.messages.validations.not),
    check('password')
      .isLength({ min: 6 }).withMessage(constants.messages.validations.length.min['6'])
      .exists().withMessage(constants.messages.validations.exist)
      .not().withMessage(constants.messages.validations.not)
]