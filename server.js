const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

global.Contacts=require('./model/contact');
const routes=require('./routes');

mongoose.Promise=global.Promise;
mongoose.set('useFindAndModify',false);
mongoose.set('useUnifiedTopology',true);
mongoose.connect(
    'mongodb://localhost:27017/AddressBook',
    {useNewUrlParser:true}
)

const port=3333;//process.env.PORT;
const app=express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended: true}))

routes(app);
app.listen(port);

app.use((req,res)=>{});

console.log('Server running on port '+port);