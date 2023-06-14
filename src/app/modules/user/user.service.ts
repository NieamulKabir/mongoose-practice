import IUser from "./user.interface";
import { User } from "./user.model";


//get user find
export const getUsersFromDb = async ():Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

//post user
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);
    await user.save();
    return user;
};


