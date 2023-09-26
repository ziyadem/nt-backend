const { userValidation } = require('../validation/user.validation');


router.post('/create_user', (req, res) => {
    console.log(req.body);
    res.status(201).send('Zor')
   const { error } = userValidation(req.body)
   
   if(error){
    console.log(error);
      return res.status(400).json({msg: error.details[0].message})
   }
})