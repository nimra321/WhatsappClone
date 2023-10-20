import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {

    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bpkxc2b.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect( URL , { useUnifiedTopology: true });
        console.log('Database Connected Successfully.');
    } catch (error) {
        console.log('Error while connecting to the Database.', error.message );
    }
}

export default Connection;