import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.ijpc8pi.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

// useNewUrlParser: true 

export default Connection;