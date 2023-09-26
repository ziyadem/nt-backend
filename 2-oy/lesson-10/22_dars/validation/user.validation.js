const Joi = require("joi")

exports.userValidation = (data) => {

    const schema = Joi.object({
        username: Joi.string().min(3).max(10).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        email: Joi.string().min(3).max(30).required().email(),
        comfirm_password: Joi.ref('password'),
        age: Joi.number().required(),
        isLogged: Joi.boolean().required(),
        sana: Joi.date().min('1-1-2000').max('12-31-2020')
    })

    return schema.validate(data)
}


exports.getUserValidation = (params) => {
    const schema = Joi.object({
        id: Joi.string().min(20).required()
    })

    return schema.validate(params)

}