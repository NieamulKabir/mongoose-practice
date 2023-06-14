import IUser from "./user.interface";
import { User } from "./user.model";


//get user find
export const getUsersFromDb = async ():Promise<IUser[]> => {
    const users = await User.find();
    return users;
}
//findOne
export const getUserByIdFromDb=async(payload:string):Promise<IUser | null>=>{
    const user = await User.findOne({id:payload},{name:1,email:1});
    return user;
}

//post user
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);
    await user.save();
    return user;
};


