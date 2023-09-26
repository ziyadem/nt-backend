const uuid = require("uuid")
const { read_file, write_file } = require("../FS/fs_api")

const User = {
    CREATE_USER: (req, res) => {
        let users = read_file("users.json")
      
        const { username, email, password, conform_password, isLogged, age } = req.body
      
         users.push({
           id: uuid.v4(),
           username,
           email,
           password,
           isLogged,
           age
         })
      
        write_file("users.json", users)
       res.status(201).send({
           msg: 'The created user'
       })
      
      if(error){
         return res.status(400).json({msg: 'Xato'})
        }
      },

    USERS_LIST: (_, res) => {
        let users = read_file("users.json")
        res.status(200).send(users)
    },
    ONE_USER:  (req, res) => {
        let user = read_file("users.json").find(user => user.id === req.params.id)
        res.status(200).send(user)
    },

    DELETE_USER: async(req, res) => {
        let users = read_file("users.json")

        let foundedUser = users.find(user => user.id === req.params.id)

        if(!foundedUser){
            return res.status(404).send('The user was not found')
        }
       
        users.filter((user, idx) => {
            if(user.id === req.params.id){
                users.splice(idx, 1)
            }
        })
       
        await write_file('users.json', users)
        res.status(200).send({
            msg: 'The user was deleted!'
        })
       },

       UPDATE_USER: (req, res) => {
        let users = read_file("users.json")
       
        const { username, email, password, comfirm_password, age, isLogged } = req.body
       
        if(password === comfirm_password){
            users.forEach((user, idx) => {
                if(user.id === req.params.id){
                   user.id = user.id,
                   username ? user.username = username : user.username,
                   age ? user.age = age : user.age,
                   email ? user.email = email : user.email,
                   password ? user.password = password : user.password,
                   isLogged ? user.isLogged = isLogged : user.isLogged
                }
            })
        }
       
        console.log(users);
       
         write_file('users.json', users)
        res.status(200).send({
            msg: 'The user was updated!'
        })
       }
}


module.exports = User