const mongoose=require('mongoose');
const Contact=mongoose.model('Contacts')

exports.create=(req,res)=>{
    const contact=new Contact(req.body);
    contact.save((err,dbContact)=>{
       if (err){
           res.status(500).send(err);
       } else {
           console.log("Record added succesfully");
           res.status(200).json(dbContact);
       }
    });
};

exports.delete=(req,res)=>{
    Contact.findById(req.params.contactId, (err,dbContact)=> {
        if (err) response.status(500).send(err);
        dbContact.delete();
        console.log("record deleted");
        res.status(200).json({
            id:req.params.contactId,
            status:"deleted"
        })
    });
}

exports.update=(req,res)=>{
    Contact.findById(req.params.contactId, (err,dbContact)=>{
        if (err) response.status(500).send(err);
        const newContact=new Contact(req.body);
        dbContact.firstname=newContact.firstname;
        dbContact.lastname=newContact.lastname;
        dbContact.email=newContact.email;
        dbContact.save((err,contact)=>{
            if (err) res.status(500).send(err);
            else {
                console.log("record updated");
                res.status(200).json(dbContact);
            }

        });
    })
};

exports.contacts=(req,res)=>{
    console.log("sending all contacts")
    Contact.find().exec((err,contacts)=>{
        if (err) res.send(err);
        console.log(contacts);
        res.status(200).json(contacts);
    });
};