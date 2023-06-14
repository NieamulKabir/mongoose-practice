import { User } from "./user.model";

export const createUserToDb = async () => {
    const user = new User({
        id: "181-15",
        role: "student",
        password: "nieamul1924",
        name: {
            firstName: "Md.K",
            lastName: "M"
        },
        dateOfBirth: "01-05-1999",
        gender: "male",
        email: "kabir00000@gmail.com",
        contactNo: "01517828832",
        emergencyContactNo: "0191160519",
        presentAddress: "Dhaka",
        permanentAddress: "Khulna"
    });
    await user.save();
    return user;
};