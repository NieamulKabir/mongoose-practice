import { NextFunction, Request, Response } from "express";
import { createUserToDb, getUsersFromDb } from "./user.service";


//get user from db
export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
   
    const user = await getUsersFromDb();

    res.status(200).json({
        status: "Success",
        data: user
    })
}

//create(post) user to DB
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDb(data);

    res.status(200).json({
        status: "Success",
        data: user
    })
}



//route->controller->service



// {
//     id: "181-15",
//     role: "student",
//     password: "nieamul1924",
//     name: {
//         firstName: "Md.K",
//         lastName: "M"
//     },
//     dateOfBirth: "01-05-1999",
//     gender: "male",
//     email: "kabir00000@gmail.com",
//     contactNo: "01517828832",
//     emergencyContactNo: "0191160519",
//     presentAddress: "Dhaka",
//     permanentAddress: "Khulna"
// }