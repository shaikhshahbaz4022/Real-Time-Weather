const express = require('express');
const UserModel = require('../Models/usermodel');
const jwt = require("jsonwebtoken")
require("dotenv").config()
const bcrypt = require("bcrypt")
const userRouter = express.Router()


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           required: true
 *         name:
 *           type: string
 *           required: true
 *         email:
 *           type: string
 *           required: true
 *         password:
 *           type: string
 *           required: true        
 *         preffered_city:
 *           type: string  
 *           required: true  
 */

/**
 * @swagger
 * /User/register:
 *   post:
 *     summary: User Registration Route.
 *     description: Registers a new user.
 *     responses:
 *       200:
 *         description: User registration successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Registration success message.
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid request payload or user already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 */

userRouter.post("/register", async (req, res) => {
    const { name, email, password, preffered_city } = req.body
    try {
        const isuserPresent = await UserModel.findOne({ email })
        if (isuserPresent) {
            return res.status(401).send({ "msg": "Login Directly" })

        }
        bcrypt.hash(password, 3, async (err, hash) => {
            const newuser = new UserModel({ name, email, password: hash, preffered_city })
            await newuser.save()
        })
        res.status(201).send({ "msg": "registration Succesfull", ok: true })

    } catch (error) {
        res.status(401).send({ "msg": error.message })
    }

})
/**
 * @swagger
 * /User/login:
 *   post:
 *     summary: User Login Route.
 *     description: Provide  a token to Already Existing user.
 *     responses:
 *       200:
 *         description: User Login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Login success message.
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Invalid request payload or user already exists.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 */
userRouter.post("/login", async (req, res) => {
    const { password, email } = req.body
    try {

        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(201).send({ "msg": "registration First" })
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                const token = jwt.sign({ "userID": user._id, "preffered_city": user.preffered_city }, process.env.SECRET, { expiresIn: "1hr" })

                res.status(201).send({ "msg": "login Succesfull", ok: true, token: token, user: user })
            } else {
                res.status(201).send({ "msg": "login Failed" })

            }
        });


    } catch (error) {
        res.status(401).send({ "msg": error.message })

    }

})

module.exports = userRouter