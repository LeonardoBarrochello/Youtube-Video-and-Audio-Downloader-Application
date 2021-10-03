const ytdl = require('ytdl-core');
import {json,Request,Response} from "express";

class VideoDownloader{
    downloadVideo(request:Request,response:Response){
       var { url } = request.query
       const verifyYTisValid = ytdl.validateURL(url)
       if(verifyYTisValid){
            response.header("Content-Disposition",'attachmentt;filename="video.mp4"')
            return ytdl(url).pipe(response);
       }else{
            return response.render("errors/invalidURL")
       }
    };
    async downloadAudio(request:Request,response:Response){
        var { url } = request.query;
        const verifyYTisValid = ytdl.validateURL(url)
        if(verifyYTisValid){
             response.header("Content-Disposition",'attachmentt;filename="audio.mp3"')
             return ytdl(url).pipe(response);
        }else{
             return response.render("errors/invalidURL")
        }
       
    }
}

export {VideoDownloader};
