const mongoose=require('mongoose');
const {Schema}=mongoose;

const ContactSchema=new Schema({
    firstname:String,
    lastname:String,
    email:String
});

module.exports=mongoose.model('Contacts',ContactSchema);