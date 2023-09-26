const { userValidation, getUserValidation } = require("../validation/user.validation")


module.exports.userValidate = function (req, res, next) {
   try {
      const { error } = userValidation(req.body)
      if (error) {
         console.log(error);
         return res.status(400).json({ msg: error.details[0].message })
      }
      next()
   } catch (error) {
      console.log(error.message);
   }
}


module.exports.getUserValidate = function(req, res, next){
   try {
      const { error } = getUserValidation(req.params)
      if (error) {
         console.log(error);
         return res.status(400).json({ msg: error.details[0].message })
      }
      next()
   } catch (error) {
      console.log(error.message);
   }


}
