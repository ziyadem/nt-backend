/*
Validation  -> JOI npm
swagger
  

*/

/*

   animals
   cars
   course
          Joi validation
          swagger 



*/



























/*
  Validation npm joi
    https://joi.dev/api/?v=17.7.0


  swagger -> CRUD


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - comfirm_password
 *       properties:
 *         username:
 *           type: string
 *           description: The title of your book
 *         email:
 *           type: string
 *           description: The book author
 *         password:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         comfirm_password:
 *           type: string
 *           description: The date the book was added
 *         age:
 *           type: number
 *           description: Your are age
 *         isLogged:
 *           type: boolean
 *           description: your are login
 *       example:
 *         id: 042bc4ff-a5bb-4a22-8456-cd2b6800e55a
 *         username: Anvar
 *         email: swagger_example@gmail.com
 *         password: swagger1234
 *         comfirm_password: swagger1234
 *         age: 12
 *         isLogged: false
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The books managing API
 * /create_user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */
router.post('/create_user', (req, res) => {
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

   console.log(users);
  write_file("users.json", users)
 res.status(201).send({
     msg: 'Created user!'
 })

if(error){
   return res.status(400).json({msg: 'Xato'})
}
})







// users list
/** 
* @swagger
* tags:
*   name: Users
*   description: The users managing API
* /user_list:
*   get:
*     summary: Lists all the users
*     tags: [Users]
*     responses:
*       200:
*         description: The list of the books
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/

router.get('/user_list', (req, res) => {
 let users = read_file("users.json")
 res.status(200).send(users)
})






// get one user
/** 
* @swagger
* /get_user/{id}:
*   get:
*     summary: Get the book by id
*     tags: [Users]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The user id
*     responses:
*       200:
*         description: The user response by id
*         content:
*           application/json:
*             schema:
*                  $ref: '#/components/schemas/User'
*       404:
*         description: The user was not found
*/
router.get('/get_user/:id', (req, res) => {
 let user = read_file("users.json").find(user => user.id === req.params.id)
 res.status(200).send(user)
})





// delete one user
/** 
* @swagger
* /delete_user/{id}:
*  delete:
*     summary: Remove the user by id
*     tags: [Users]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The user id
*
*     responses:
*       200:
*         description: The user was deleted
*       404:
*         description: The user was not found
*/
router.delete('/delete_user/:id', async(req, res) => {
 let users = read_file("users.json")

 users.filter((user, idx) => {
     if(user.id === req.params.id){
         users.splice(idx, 1)
     }
 })

 await write_file('users.json', users)
 res.status(200).send({
     msg: 'The user was deleted!'
 })
})






//update one user
/** 
*  @swagger
* /update_user/{id}:
*   put:
*    summary: Update the user by the id
*    tags: [Users]
*    parameters:
*      - in: path
*        name: id
*        schema:
*          type: string
*        required: true
*        description: The user id
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            $ref: '#/components/schemas/User'
*    responses:
*      200:
*        description: The user was updated
*        content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/User'
*      404:
*        description: The user was not found
*      500:
*        description: Some error happened
*/
router.put('/update_user/:id', (req, res) => {
 let users = read_file("users.json")

 const { username, email, password, comfirm_password, age, isLogged } = req.body

 if(password === comfirm_password){
     users.filter((user, idx) => {
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
})






/*

   users swagger -> CRUD

   course
   animal
   fruits
   cars
   










*/

    














*/