const http=require('http');
const mongoose = require('mongoose');
const app = require('./app');


async function db(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/friendsDB')
        console.log("connected to database");
    } catch (error) {
        console.log('There was some error connecting to database');
    }
}
db();

server=http.createServer(app)
server.listen(5000,()=>{
    console.log("Running on port 5000");
})