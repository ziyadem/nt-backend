const { Router } = require("express")
const usersCtr = require("../controller/user.controller")
const { userValidate, getUserValidate } = require("../middleware/user.middleware")


const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Animal:
 *       type: object
 *       required:
 *         - title
 *         - type
 *       properties:
 *         title:
 *           type: string
 *           description: The title of your user
 *         type:
 *           type: string
 *           description: The type 
 *       example:
 *         id: 042bc4ff-a5bb-4a22-8456-cd2b6800e55a
 *         title: Sher
 *         type: Yirtqich
 */



/**
 * @swagger
 * tags:
 *   name: Animals
 *   description: The users managing API
 * /create_animal:
 *   post:
 *     summary: Create a new animal
 *     tags: [Animals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Animal'
 *     responses:
 *       201:
 *         description: The created animal.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Animal'
 *       500:
 *         description: Some server error
 *
 */
router.post('/create_animal',  usersCtr.CREATE_USER)


module.exports = router