import userModel from "../model/userSchema.js";


export const getallusers = async(req,res)=>{
    try {
        const data = await userModel.find({});

        res.status(200).json({
            message: "get all user succesfull",
            data
        })
        
    } catch (error) {
        console.log(error);
    }
}