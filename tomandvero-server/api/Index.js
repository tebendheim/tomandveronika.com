
// imports
const express = require('express');
const cors = require('cors')
const Axios = require('axios')
const helmet = require('helmet')
const morgan = require('morgan')
const client = require('@sendgrid/mail');

//client.setApiKey(process.env.SENDGRID_API_KEY);
//const bodyParser = require('body-parser')

require('dotenv').config()


// setting listening and Cache
const http = require('http');
const hostname='127.0.0.1';
const port = 5001;
let cachedData
let cachedTime

// Setting express as app and make it use the imports
const app = express()
//app.use(bodyParser.json())
app.use(helmet())
app.use(morgan('combined'))
app.use(cors()) //Uten denne vil man få nettwork error.
app.use(express.json())
//app.use(express.urlencoded({extended: true})) // dette er dersom jeg ønsker å sende 



// sendgrid med recaptcha
app.post('/api/sendgrid', async(req, res)=>{
  const body = req.body.data
  const captcha = body['token']
  const capURL= `https://www.google.com/recaptcha/api/siteverify`
  const capParams={
      params:{
      secret:process.env.REC_SECRET_KEY,
      response:captcha,
    }
  }
  const capResponse = await Axios.get(capURL,capParams);
  const isHuman = capResponse.data['success']
  //const isHuman = false // Dette er bare for testingsmuligheter
  if (!isHuman) {
    res.status(400).json({'errors': ['it seems to be an error with your verification']})
    return;
  } //*/

  //Denne res skal kommenters bort når hele funksjonen skal brukse.
  //res.status(200).json({'body':['Is a human']})

    const apiKey = process.env.SENDGRID_API_KEY
    client.setApiKey(apiKey);
    const message = {
      to:body['email'],
      from:process.env.MY_EMAIL,
      subject:'Nytt kontaktskjema fra tomandvero.com er mottatt',
      text:`Hei \n${body['message']}`
    }
try{
      const gridResponse = await client.send(message);
      res.status(200).json({'body':['kommer denne opp nå?']})
      console.log(gridResponse)
      return(gridResponse)
    } catch(error) {
      res.status(400).json({'body':['Server Error']})
      return (error);
    };


    /*
      const gridResponse = await client.send(message).then((response) => {
      res.status(200).json({'body':['kommer denne opp nå?']})
      console.log(gridResponse)
      return(response)
    }).catch(error => {
      res.status(400).json({'body':['Server Error']})
      return (error);
    });


  //*/

})







//Herfra og ned gjelder Youtube

// Bruker ikke per nå.
app.get('/api/youtube/testing', async(req, res) => {    
    const url =`https://youtube.googleapis.com/youtube/v3/playlistItems?`;
    const params = {
      
      params:{
          part:'snippet',
          playlistId:process.env.PLAYLISTID,
          key:process.env.API_KEY_YOUTUBE,
      },
      headers:{
          'content-type':'application/JSON'
      },
      }
      try {
        const ac = await Axios.get(url, params);
        res.json(ac.data.items)

      } 
      catch(err){
        res.send(err)
      }
     })


// Denne bruker jeg.
app.post('/api/youtube/testing', async(req, res) => {
  console.log(req.body)
  if (true){
    const url =`https://youtube.googleapis.com/youtube/v3/playlistItems?`;
    const params = {
      params:{
          part:'snippet',
          maxResults:50,
          playlistId:process.env.PLAYLISTID,
          key:process.env.API_KEY_YOUTUBE,
      },
      headers:{
          'content-type':'application/JSON',
      },
      }
      try {
        const ac = await Axios.get(url, params);
        res.json(ac.data)
      } 
      catch(err){
        res.send(err)
      }}

  else{
        res.json('user not authenticated')
  }
})



// Denne bruker jeg.
app.get('/api/youtube', async(req, res) => {
//if (req.headers['x-token']='qwertyuiopå'){
  const options={
    method:"GET",
//url:`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.PLAYLISTID}&key=${process.env.API_KEY_YOUTUBE}`,
    url:`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet`,
    headers:{
      'content-type':'application/JSON',
      },
    params: {
      maxResults:req.headers['maxresults'],
      playlistId:process.env.PLAYLISTID,
      key:process.env.API_KEY_YOUTUBE
    }
    }
  try{
      const ax = await Axios.request(options);
      res.json(ax.data)
  } catch(err){
      res.send(err)
  }
/*
}else {
  res.json('user not authorized')
}*/
})


// sjekke om class funker ()
class test {
  constructor(){
    this.test = 'dette er en test'
  }
  getTest(){
    app.get('/testing/class', (req,res)=>{
      res.status(200).json('dette fungerte')
      console.log('dette fungerte fra test')
      return this.test
    })
  }
}

app.listen(port, () => {console.log(`Server is running on port ${port}`)}) //Denne setter i gang listening to server

module.exports= app