import { response } from "express";
import User from "../model/user.js";



 export const UserController = async (request, response) => {

   try {
    let exist = await User.findOne({ sub: request.body.sub });

    if(exist) {
        response.status(200).json({ msg: 'USer already Exist.' });
        return;
    }
    const newUser = new User(request.body);
    await newUser.save();
    return response.status(200).json(newUser);

   } catch (error) {          
        return response.status(500).json(error.message);
   }
 }
 
 export const getUsers = async (request , response) => {
  try {
    const users = await User.find( {} );
    return response.status(200).json(users);
  } catch (error) {
    return response.status(500).json(error.message);
  }
 }

