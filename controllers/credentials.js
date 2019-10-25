// Use LDAP
//const ldap = require('ldapjs');

const admin = require("firebase-admin");
const serviceAccount = require("../config/swsykes-6dbbd-firebase-adminsdk-tomxs-bcfaec8579.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://swsykes-6dbbd.firebaseio.com"
});

// packages
const { validationResult } = require('express-validator')

// Constants
const constants = require('../constants/Messages')


let entity = 'credenciales'
exports.signin = async (req, res) => {
   try {
      const errors = validationResult(req)
      if (errors.isEmpty()) {
         let result = await getUser("/restricted_access/users/username1");
         res.status(200).send({ code: 1, message: constants.messages.signin.success[1], response: result })
      } else {
        res.status(400).send({ code: 4, message: constants.messages.signin.error[1], error: errors.array() })
      }
   } catch (error) {
      res.status(500).send({ code: 0, message: constants.messages.signin.error[1], error: error })
   }
}

exports.listUsers = async (req, res) =>{
   try {
      let result = await getUser("/restricted_access/users");
      res.status(200).send({ code: 1, message: constants.messages.signin.success[1], response: result })
   } catch (error) {
      res.status(500).send({ code: 0, message: constants.messages.signin.error[1], error: error })
   }
}

const getUser = async (param) =>{
   try {
      let database = admin.database();
      let ref = database.ref(param);
      let value = ref.once("value", function(snapshot) {
         return snapshot.val()
      })
      return value
   } catch (error) {
      throw new Error(error)
   }
}