import express  from "express";


import { UserController , getUsers} from '../controller/user-Controller.js';
import { newConversation } from "../controller/conversation-controller.js";

const route = express.Router();

route.post('/add', UserController );
route.get('/users', getUsers);
route.post('/conversation/add', newConversation);

export default route;