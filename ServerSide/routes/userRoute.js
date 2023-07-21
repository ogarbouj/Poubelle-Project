import express from "express";
import { addUser, deleteUser, getUser,sendForgotPasswordEmail, patchUser, signIn, logoutUser,verifyVerificationCode, getAllUsers, } from "../controllers/userController.js"
import { body } from "express-validator";
import verifyToken from "../Middlewares/auth.js";
const router = express.Router()

router.route("/")
    .post(body('phone').isLength({ min: 8, max: 8 }), addUser)
    .get(verifyToken, getAllUsers)

router.route("/:id")
    .get(verifyToken, getUser)

router.route("/sign")
    .post(signIn)
    router.post('/sign/reset-password', verifyVerificationCode);
    router.post('/sign/forgot-password', sendForgotPasswordEmail);

router.route("/:id")
    .patch(verifyToken, patchUser)
    .delete(verifyToken, deleteUser)


router.route("/logout")
    .post(verifyToken, logoutUser);


export default router