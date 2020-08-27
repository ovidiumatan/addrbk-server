const contactsBuilder=require('./controller/contactsController')

module.exports=app=> {
    app.route('/contact').post(contactsBuilder.create);
    app.route('/contact/:contactId').post(contactsBuilder.update);
    app.route('/contact/:contactId').delete(contactsBuilder.delete);
    app.route('/contacts').get(contactsBuilder.contacts);
}