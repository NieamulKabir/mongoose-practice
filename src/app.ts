import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';
import { Schema, model } from 'mongoose';


const app: Application = express();

///using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    //inserting a test data into mongoDb
    /*
        step1: interface
        step2: schema
        step3:model
        step4: Database Query
    */


    // res.send('Hello World!');
    // next();


    //creating an interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    };


    //creating schema using interface
    const userSchema = new Schema<IUser>({
        id: { type: String, required: true, unique: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
        name: {
            firstName: { type: String, required: true },
            middleName: { type: String },
            lastName: { type: String, required: true }
        },
        dateOfBirth: { type: String,required: true },
        gender: { type: String, enum: ["male", "female"] ,required: true},
        email: { type: String ,},
        contactNo: { type: String ,required: true},
        emergencyContactNo: { type: String ,required: true},
        presentAddress: { type: String ,required: true},
        permanentAddress: { type: String ,required: true},


    });
});


export default app;