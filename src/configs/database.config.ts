import { connect } from "mongoose";

export const databaseConnect = async () => {
    try {
        await connect(process.env.MONGODB_URI!); 
        console.log("Conexão bem sucedida!");
    } catch (error) {
        console.log(error);
    }
}