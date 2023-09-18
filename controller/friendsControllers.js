const Friend = require('../models/friendSchema');



const formPage=async(req,res)=>{
    res.render('form')
}

//

const aboutPage=async(req,res)=>{
    res.render('about')
}

const getAllFiends=async(req,res)=>{
    try {
        let friends=await Friend.find();
        const str="good morning"
        res.render('home',{str, friends})
        // res.status(200).json({
        //     status:"success",
        //     count:friends.length,
        //     data:{
        //         friends
        //     }
        // })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
}

const createFriends=async(req,res)=>{
    try {
        let file=req.file;
        let payload=req.body;
        console.log(file,payload);
        // let result=await Friend.create(req.body)
        // res.status(200).json({
        //     status:'success',
        //     count:result.count,
        //     data:{
        //         result
        //     }
        // })
    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:error.message
        })
    }
}

module.exports={
    formPage,
    aboutPage,
    getAllFiends,
    createFriends
}