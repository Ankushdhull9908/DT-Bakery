import mongoose from "mongoose";

async function mongoDB() {
    try {
        await mongoose.connect('mongodb+srv://ankushdhull9908_db_user:1234567890@cluster0.cs6jo7y.mongodb.net/yourDatabaseName');
        console.log('DB Connected Successfully');
    } catch (error) {
        console.log('DB Connection Error:', error);
    }
}

export default mongoDB;