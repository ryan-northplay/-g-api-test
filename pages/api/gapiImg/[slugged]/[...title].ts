import express from 'express';
import cors    from 'cors';
import request from 'request'
import prisma from './../../../../lib/prisma.js';
import { PrismaClient, Prisma } from '@prisma/client'

class HTTPResponseError extends Error {
	constructor(response) {
		super(`HTTP Error Response: ${response.status} ${response.statusText}`);
		this.response = response;
	}
}

const app = express();
app.use(cors());
app.set('json spaces', 2)
app.all('/*', async (req, res) => {
  try {
    const {slugged, title} = req.query;
    
    var targetReplace = slugged.toString();


    let titleReplace = await title.toString();
    var selectData = await prisma.game.findFirst({
      where: {
        menu_title: (titleReplace).replace(".png", "")
      },
    });

    var originImageId = 'https://admin.gapi.lol/img/games'+((selectData.image).toString());
    if(targetReplace === "pragmatic") {
      var ssId2 = await ((selectData.name).toString()).split(' ').join('');
      targetReplace = await (targetReplace).replace("pragmatic", "pragmaticexternal");
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    if(targetReplace === "novomatic") {
      var ssId2 = await ((selectData.name).toString()).split(' ').join('');
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    if(targetReplace === "egt") {
      var ssId2 = await ((selectData.name).toString()).split(' ').join('');
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    if(targetReplace === "wazdan") {
      var ssId2 = await ((selectData.name).toString()).split(' ').join('');
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    if(targetReplace === "amatic") {
      var ssId2 = await ((selectData.menu_title).toString()).split(' ').join('');
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    if(targetReplace === "bomba") {
      var ssId2 = await ((selectData.name).toString()).split(' ').join('');
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    if(targetReplace === "aristocrat") {
      var ssId2 = await ((selectData.name).toString()).split(' ').join('');
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    if(targetReplace === "netent") {
      var ssId2 = await ((selectData.name).toString()).split(' ').join('');
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    if(targetReplace === "merkur") {
      var ssId2 = await ((selectData.name).toString()).split(' ').join('');
      var finalUrl = 'https://cdn.softswiss.net/i/s3/'+targetReplace+'/'+ssId2+'.png';
    }
    // proxy request to target url


    const response = await fetch(finalUrl);
    const checkStatus = async(response, originImgId) => {
      if (response.ok) {
        // response.status >= 200 && response.status < 300
        return 'good';
      } else {
        return 'bad';
      }
    }
    try {
      let checkedStatus = await checkStatus(response, originImageId);

      if(checkedStatus === 'good') {
        const target = await request(finalUrl)
        await req.pipe(target);
        await target.pipe(res);

      }

      if(checkedStatus === 'bad')
      {
        const targetFallover = await request(originImageId)
        await req.pipe(targetFallover);
        await targetFallover.pipe(res);
      }
    } catch (error) {
      console.error(error);
    
    }



  } catch(err) { 
    console.error(err)
    return res.status(500).json({
      "title": "CORS Proxy Error - Internal server error",
      "detail": err.message,
    }) 
  }
})

export default app;
