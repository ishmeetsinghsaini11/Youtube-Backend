import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt, { compare } from "bcrypt"

const userSchema = new Schema(
    {
        username:{
            type: String,
            requried: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            requried: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname:{
            type: String,
            requried: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String, //cloudinary url
            requried: true,
        },
        coverImage:{
            type: String, //cloudinary url
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type: String,
            required:[true, "Password is required"]
        },
        refreshToken:{
            type: String
        }
    },
    {
        timestamps:true
    }
) 

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = bcrypt.hash(this.password, 10)
    next()

})

userSchema.method.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)