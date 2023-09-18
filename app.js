const express=require('express')
const routes=require('./routes/friendsRoutes')

const app=express();


app.set('view engine','ejs')

app.use(express.urlencoded())
app.use(express.json())
app.use('/app/friends',routes)

app.get('/',(req,res)=>{
    res.send("testing");
    
})


module.exports=app;