const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

// middleware
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.S1_USERNAME}:${process.env.S2_USERPASS}@cluster0.azyqnnz.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1,strict: true, deprecationErrors: true,}});

app.get("/",(req,res)=>{
  res.send('Hello boss running')
})

// varify token not access you data anathor person
const varifytoken=(req,res,next)=>{
  const headerdata=req.headers.authorization
  if(!headerdata){
      return res.status(401).send({Message:'unauthorize access not your headers ,🤢🤢🤢'})
  }
  const token=headerdata.split(' ')[1]
  jwt.verify(token,process.env.S3_ASSENTOKEN, function(err, decoded) {
     if(err){
      return res.status(403).send({message:'sry,unauthorisze access'})
     }
     req.decoded=decoded
     next()
    });
}

async function run() {
  try {
    const dbfoods = client.db("Bistro").collection("foods");
    const dbreview = client.db("Bistro").collection("reviews");
    const dbcarts = client.db("Bistro").collection("carts");
    const dbuser= client.db("Bistro").collection("users");
   
    // varify admin middleware
    const varifyadmin = async (req, res, next) => {
      const email = req.decoded.email
      const query = { email: email }
      const user = await dbuser.findOne(query)
      if(user?.role !== 'admin'){
        return res.status(403).send({message:'you not a user'})
      }
      next()
    }

    // jwt token post your data 
    app.post('/jwt',async(req,res)=>{
      const user=req.body
      const token=jwt.sign(user,`${process.env.S3_ASSENTOKEN}`, { expiresIn: '5h' });
      res.send({token})
    })

    // post user data send
    app.post('/users',async(req,res)=>{
       const user=req.body
       const query={email:user?.email}
       const existinguser=await dbuser.findOne(query)
       if(existinguser){
        return res.send({message:'//user already exsis'})
       }else{
        const result = await dbuser.insertOne(user);
        res.send(result)
       }
       
    })
    // get user data send
    app.get('/users',varifytoken,varifyadmin,async(req,res)=>{
      const query={}
      const result=await dbuser.find(query).toArray()
      res.send(result)
    })
    // patch the admin super power
    app.patch('/users/admin/:id',async(req,res)=>{
      const id=req.params.id
      const body=req.body
      const filter = {_id:new ObjectId(id)};
      const options = { upsert: true };
      const updateDoc = {
        $set: {
         role: body.role
        },
      };
      const result = await dbuser.updateOne(filter, updateDoc, options);
      res.send(result)
    })
    // admin get data
    app.get('/users/admin/:email',varifytoken,async(req,res)=>{
      const email=req.params.email
      if(email !== req.decoded.email){
        res.send({message:'your email not vaild'})
      }
      const query={email:email}
      const user=await dbuser.findOne(query)
      const result={admin:user?.role === 'admin'}
      res.send(result)
    })
    //  ! ********foods all items ******* start
    // get data bd foods
    app.get("/foods",async(req,res)=>{
        const query={}
        const cursor = dbfoods.find(query);
        const result=await cursor.toArray()
        res.send(result)
      })
        // foods data findone
        app.get('/foods/:id',async(req,res)=>{
          const id=req.params.id
          const query={_id:new ObjectId(id)}
          const result=await dbfoods.findOne(query)
          res.send(result)
    
        })
      // post data foods
    app.post('/foods',async(req,res)=>{
      const bodydata=req.body
      const result = await dbfoods.insertOne(bodydata);
      res.send(result)
    })
    app.delete('/foods/:id',async(req,res)=>{
      const id=req.params.id
      const query={_id:new ObjectId(id)}
      const result=await dbfoods.deleteOne(query)
      res.send(result)
    })
    //  ! ********foods all items ******* end
    //   get data bd review
    app.get("/review",async(req,res)=>{
        const query={}
        const cursor = dbreview.find(query);
        const result=await cursor.toArray()
        res.send(result) 
    })
    // cart order items
    app.post('/carts',async(req,res)=>{
      const carts=req.body
      const result = await dbcarts.insertOne(carts);
      res.send(result)
    })
    // cart get items varigy token
    app.get('/carts',varifytoken,async(req,res)=>{
      const email=req.query.email
      const docodedue=req.decoded.email
      // jwt lock token
      if(email !== docodedue){
        res.status(403).send({message:'Your decoded email !== query email not fond'})
      }
      if(req.query?.email === docodedue){
        const query={email:email}
        const result=await dbcarts.find(query).toArray()
        res.send(result)
      }
        
      
      
     
    })
    // cart delete data
    app.delete('/carts/:id',async(req,res)=>{
      const id=req.params.id
      const query = {orderid:id};
       const result = await dbcarts.deleteOne(query);
       res.send(result)
    })
    
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})