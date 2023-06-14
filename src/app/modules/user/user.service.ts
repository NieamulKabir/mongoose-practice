import IUser from "./user.interface";
import { User } from "./user.model";


//get user find
export const getUsersFromDb = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}
//findOne
export const getUserByIdFromDb = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
    return user;
}

//post user
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);// User-> class||user-> instance
    await user.save();// save() -> method
    console.log(user.fullName());
    return user;
};

//custom static function call and get admin data
export const getAdminUsersFromDb = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}


