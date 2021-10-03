import  express, { request }  from "express";
import { VideoDownloader } from "./src/controllers/DownloadVideoYTController";
const router = express.Router();

const videoDownload = new VideoDownloader();
router.get("/",(request,response)=>{
    response.render("main")
})

router.get("/download-video",(request,response)=>videoDownload.downloadVideo(request,response))
router.get("/download-audio",(request,response)=>videoDownload.downloadAudio(request,response))


export {router}
