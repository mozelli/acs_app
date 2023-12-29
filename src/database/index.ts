import mongoose from "mongoose";

export function connect(){
    try {
        mongoose.connect(process.env.DB_URI);
        mongoose.Promise = global.Promise;
        console.log("Database connected.");
    } catch(error) {
        console.log("Erro database connect.", error);
    }
}