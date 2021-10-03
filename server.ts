import express from "express";
import { router } from "./routes";
import path from "path";
const server = express();

server.engine('html', require('ejs').renderFile);
server.use('/public', express.static(path.join(__dirname, 'public')));
server.set("view engine","html")
server.set("views",path.join(__dirname,"src/views/"))

server.use(router)

server.listen(3000, ()=>{
    console.log("server is running")
})