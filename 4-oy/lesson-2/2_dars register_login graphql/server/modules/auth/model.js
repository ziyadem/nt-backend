const pool = require("../../db/db_config")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (args) => {
    const { user_name, user_surname,  user_email, user_password, user_age, user_role } = args


    const hashPsw = await bcrypt.hash(user_password, 12)
    await pool.query(`INSERT INTO users( user_name, user_email, user_password, user_age, user_surname, user_role) VALUES($1, $2, $3, $4, $5, $6)`, 
    [    user_name, 
         user_email,
         user_password, 
         user_age, 
         user_surname, 
         user_role])
    return { msg: 'Registired!' }
}


const login = async (args) => {
    const { user_email, user_password } = args

   let foundedUser = await pool.query(` SELECT * FROM users WHERE user_email = $1 `, [ user_email ])

   foundedUser = foundedUser.rows[0]
   if(!foundedUser){
    return {
        msg: 'User not found!'
    }
   }

//    let checkPsw = await bcrypt.compare(user_password, foundedUser.user_password)

//    if(!checkPsw) return { msg: 'Pssword xato!' } 

   let token = await jwt.sign({ id: foundedUser.id}, "secret_key", {
    expiresIn: '1d'
   } )

   return {
    msg: 'Success',
    token
   }
}

module.exports = {
    register, login
}