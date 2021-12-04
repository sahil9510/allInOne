const router = require('express').Router();
const Twitter= require('twitter');

const client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

router.get('/news',async(req,res,next)=>{
    let trends;
    try{
     trends = await client.get('/trends/place.json',{
        id:23424848
    })
    }catch(err){
        console.log(err);
    }
    res.send(trends);
})

module.exports=router