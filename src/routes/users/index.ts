import express from 'express';
import { authUser } from '../../controllers/users/authUser';
import { createUser } from '../../controllers/users/createUser';
import { deleteUser } from '../../controllers/users/deleteUser';
import { getUserProfile } from '../../controllers/users/getUserProfile';
import { getUsers } from '../../controllers/users/getUsers';
import { updateUser } from '../../controllers/users/updateUser';
import { updateUserProfile } from '../../controllers/users/updateUserProfile';
import { runValidation } from '../../validators';
import { userSigninValidator, userSignupValidator } from '../../validators/auth';



const userRouter = express.Router();

userRouter.post('/',userSignupValidator, runValidation , createUser);
userRouter.post('/login', userSigninValidator, runValidation, authUser);

userRouter.get('/' , getUsers)
userRouter.get('/:id' , getUserProfile);
userRouter.delete('/:id' , deleteUser);
userRouter.put('/profile/:id', updateUserProfile) 
userRouter.put('/:id', updateUser)
export default userRouter;
