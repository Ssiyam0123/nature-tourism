import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if(connectionState == 1){
        console.log("all ready connected")
        return
    }
   else if(connectionState == 2){
        console.log("connecting...")
        return
    }

    try {
        mongoose.connect(MONGODB_URI!,{
            dbName: 'travel_manager',
            bufferCommands: true
        });
        console.log("connected")
    } catch (error: any) {
        console.log("Error", error)
        throw new Error(error)
    }
}

export default connect;