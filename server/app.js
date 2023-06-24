import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
 import logger from "./logger.js"
 

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const DB="mongodb+srv://Makers1:098098@cluster1.srdtvqr.mongodb.net/mern?retryWrites=true&w=majority"
mongoose.connect(DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true,
    useFindAndModify:false
  }).then(() => {
     console.log(`connection sucessful`)
  }).catch((err) => console.log(` connection sucessful through port 5000`))

  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
  })
  
  const User = new mongoose.model("User", userSchema)

  // var bodyParser = require('body-parser');
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: true}));

// here I am defining Routes
app.post("/Login", (req, res) => {
    const {  email, password } = req.body;
    User.findOne({ email:email}, (err, user) => {
        if(user){
              if(password === user.password){
                  res.send({message: "Login Sussesful",user:user})
              } else {
                res.send({ message: "Password didnt match"})
              }
        }else{
            res.send({ message:"User not registered"})
        }
    })
})

app.post("/Register", (req, res)=> {
  var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log(req.body, currentdate,datetime)
  const { name, email, password } = req.body
  User.findOne({ email: email}, (err, user) => {
    if (user) {
      res.send ({ message:"User already Registered" })
    } else {
       const myData = new User ({
        name,
        email,
        password
      })
      // user.save(err => {
      //   if (err) {
      //     res.send(err)
      //   } else {
      //     res.send( {message: "Successfully Registered"} )
      //   }
      // })
      myData.save()
      .then(item => {
        res.send("registered");
      })
      .catch(err => {
        res.status(400).send("unable to save to database")
      })
    }
  })
})

app.listen(5000 , () => {
  logger.log('info',"BE started at port 5000");
})




