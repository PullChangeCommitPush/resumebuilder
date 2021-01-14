const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// var DB_URL = process.env.MONGODB_URL || "mongodb+srv://danny:danny123@cluster0.5rdyu.mongodb.net/sample_training?retryWrites=true&w=majority"
// mongoose.connect(DB_URL);

var DB_URL = process.env.MONGODB_URL || 'mongodb://localhost/employees';
mongoose.connect(DB_URL);

mongoose.connection.once('open',(err)=>{
    if(!err)
        console.log('DB Connection Successful');
    else
        console.log('Error in Connection :'+err);
});
module.esports = mongoose;
