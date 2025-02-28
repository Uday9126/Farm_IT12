import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Routes from './routes/allRoutes.js';
import cors from 'cors';
// import  {authorizationUser, checkRole } from './middleware/authMiddleware.js'


dotenv.config();
connectDB();


const app = express();
app.use(express.json());

app.use(cors())


app.use('/Main', Routes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    