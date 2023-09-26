const { Router } = require("express")
const usersCtr = require("../controller/user.controller")
const { userValidate, getUserValidate } = require("../middleware/user.middleware")


const router = Router();

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
 *           description: The username of your user
 *         email:
 *           type: string
 *           description: The user 
 *         password:
 *           type: string
 *           description: passwordinggizni kiriting
 *         comfirm_password:
 *           type: string
 *           description: passwordni takrorlang
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
 *   description: The users managing API
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
 *       201:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */
router.post('/create_user', userValidate,  usersCtr.CREATE_USER)


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
*         description: The list of the users
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/User'
*/

router.get('/user_list', usersCtr.USERS_LIST)




// get one user
/** 
* @swagger
* /get_user/{id}:
*   get:
*     summary: Get the user by id
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
router.get('/get_user/:id', getUserValidate, usersCtr.ONE_USER)




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
router.delete('/delete_user/:id', getUserValidate, usersCtr.DELETE_USER)




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
router.put('/update_user/:id',[getUserValidate, userValidate],  usersCtr.UPDATE_USER)
   

module.exports = router;
