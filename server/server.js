const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(parser.json());
app.use(cors());


MongoClient.connect('mongodb://localhost:27017', (err, client) => { 
  if(err){
    console.log(err);
  }

  const db = client.db('booking_manager');                  
  const bookingsCollection = db.collection('bookings');         
  const bookingsRouter = createRouter(bookingsCollection)  
  app.use('/api/bookings', bookingsRouter);                    


  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
