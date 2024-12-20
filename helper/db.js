import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "docchat",
        });
        console.log("db connected...");
        //console.log(connection);

        //testing and creating new user
        // const firstUser = new User({
        //     name: "test name",
        //     email: "test@gmail.com",
        //     password: "testpassword",
        //     about: "this is testing",
        // });

        // await firstUser.save();
        // console.log("user is created");

        console.log("connected with host ", connection.host);
    }
    catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    }
};