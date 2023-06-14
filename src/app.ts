import express, { Application} from 'express'
import cors from 'cors';

const app: Application = express();

//application router
import userRouter from './app/modules/user/user.route'

///using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/v1/user',userRouter );
app.use('/api/v1/user',userRouter)


export default app;


 //inserting a test data into mongoDb
    /*
        step1: interface
        step2: schema
        step3:model
        step4: Database Query
    */