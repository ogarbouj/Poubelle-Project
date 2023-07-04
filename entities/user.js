import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import pkg from "validator";
const {isEmail}=pkg
const rolesEnum = Object.freeze({
  ADMIN: 'admin',
  USER: 'user',
  COLLECT: 'collect',
  ENTREPRISE: 'entreprise',
  RECYCLEUR: 'recycleur'
});

const schemaUser = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      unique : true,
    },
    pwd: {
      type: String,
      required: false,
    },
    token: {
      type: String,
      required: false,
    },
role: {
      type: String,
      enum: Object.values(rolesEnum),
      default: rolesEnum.USER,
    },
    

    verified: {
      type: Boolean,
      
      default:false
    },

    langitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
// play function before save into  display :'block';
schemaUser.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.pwd = await bcrypt.hash(this.pwd, salt);
  next();
});
// decrypt le login et verfiy if user existe
schemaUser.statics.login = async function (email, pwd)
 {

  const user = await this.findOne({ email });
 
  if (user) {
      const auth = await bcrypt.compare(pwd, user.pwd);
    console.log(auth)
      if (auth) {
          return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email')
};

export default model("User", schemaUser);