import { connect } from "mongoose";

export default async function databaseConnect() {
    try {
        await connect(process.env.MONGODB_URI!); 
        console.log("Conexão bem sucedida!");
    } catch (error) {
        console.log(error);
    }
}