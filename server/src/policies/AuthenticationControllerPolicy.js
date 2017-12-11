var Joi = require('joi');

module.exports = {
  register(req, res, next) {
    var schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-z0-9]{8,32}$')
      )
    }
    const { error, value } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'a valid email is required'
          })
          break;
        case 'password':
          res.status(400).send({
            error: `password failed, it must match this rules br
            1.it must contain only lower case, upper case and numeric characters
            <br>
            2. password must be between the ranges of 8 - 32 in length
            `
          })
          break;
        default:
          res.status(400).send({
            error:`problem with details`
          })
          break;
      }
    } else {
      next();
    }
  }
}
