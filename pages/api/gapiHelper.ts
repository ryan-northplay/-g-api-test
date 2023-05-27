import express from 'express';
import cors    from 'cors';
import request from 'request'

function parseProxyParameters(proxyRequest){
  const params = {}
  // url - treat everything right to url= query parameter as target url value
  const urlMatch = proxyRequest.url.match(/(?<=[?&])url=(?<url>.*)$/)
  if(urlMatch) {
    params.url =  decodeURIComponent(urlMatch.groups.url)
  }
  return params
}

const app = express();
app.use(cors());
app.set('json spaces', 2)
app.all('/*', async (req, res) => {
  try {
    // proxy request to target url
    const getUrl = await (req.url).toString();
    var finalUrl = await (getUrl.replace('/api/gapiHelper', '/test.html'));
    const target = request(finalUrl)
    req.pipe(target)
    target.pipe(res)
    
  } catch(err) { 
    console.error(err)
    return res.status(500).json({
      "title": "CORS Proxy Error - Internal server error",
      "detail": err.message,
    }) 
  }
})

export default app;