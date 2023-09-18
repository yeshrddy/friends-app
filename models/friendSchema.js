const {Schema, model}=require('mongoose');


let friendSchema=new Schema({
    name:{
        type:String,
        required:[true,"name field required"]
    },
    phone:{
        type:Number,
        required:[true,"phone field required"]
    },
    image:{
        type:String
    },
    age:{
        type:Number,
        required:[true,"age field required"]
    }
})

module.exports=model('Friend',friendSchema);