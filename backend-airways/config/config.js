const mongoose = require('mongoose');

const connection = async() => {
    try{
        const connect = await mongoose.connect('mongodb+srv://nusaiffanukp:Nsf1234@cluster0.7nhl0wx.mongodb.net/?retryWrites=true&w=majority')
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('Error connecting to MongoDB');
        process.exit(1);
    }
}

module.export = connection;