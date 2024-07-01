import express from 'express'
import { loginUser,registerUser } from '../controllers/userController.js'



//construct one router for the user 

const userRouter=express.Router();



userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);




export default userRouter;