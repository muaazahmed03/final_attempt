import userModel from "../model/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


export const loginController = async (req, res) =>{

    try {
        
        const { email, password} = req.body;
        
            if(!email || !password){
                res.status(400).json({
                    message: "required field are missing",
                })
            }
        
           const emailExist = await userModel.findOne({email});
        
           if (!emailExist){
            res.status(400).json({
                message: "invalid email or password"
            })
           }
        
           console.log(emailExist);
        
           const comparePassword = await bcrypt.compare(password, emailExist.password);
        
           if(!comparePassword){
            res.status(400).json({
                message: "invaild email or password",
            });
           }

           let token = jwt.sign(
           { email:emailExist.email }, 
           process.env.JWT_SECRET_KEY
        );
        
        console.log(token);

           res.status(200).json({
            message: "login successfully",
           })

    } catch (error) {
        console.log(error);
    }
}