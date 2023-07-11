import express from "express";
import { addUser, deleteUser, getUser, patchUser, signIn, logoutUser } from "../controllers/userController.js"
import { body } from "express-validator";
import verifyToken from "../Middlewares/auth.js";
const router = express.Router()

router.route("/")
    .post(body('phone').isLength({ min: 8, max: 8 }), verifyToken, addUser)

router.route("/:name")
    .get(verifyToken, getUser)

router.route("/sign")
    .post(signIn)

router.route("/:id")
    .patch(verifyToken, patchUser)
    .delete(verifyToken, deleteUser)


router.route("/logout")
    .post(verifyToken, logoutUser);


export default router