import mongoose from 'mongoose';
import  dotenv from 'dotenv'

dotenv.config()

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

 const  connection = () => {
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@mern-todo.u9bpe2x.mongodb.net/?retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URI, {useNewUrlParser :true})

    mongoose.connection.on('connected', () => {
        console.log('database connected successfuly')
    })

    mongoose.connection.on('disconnected', () => {
        console.log('database disconnected successfully')
    })

    mongoose.connection.on('error', () => {
        console.log('error while connecting database', error.message);
    })
}

export default connection;