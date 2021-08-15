
const Message = require('../models/message');

class Contact {

    constructor(){

    }

    async createMessage(message){
        return Message.create(message);
    }

    async findAllMsg() {
        return Message.find();
    }

}

let messagesController = new Contact();
module.exports = messagesController;