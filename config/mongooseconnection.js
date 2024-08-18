const mongoose=require('mongoose');
const config=require('config');
config.util.setModuleDefaults('development', require('./development.json'));
const dbgr = require("debug")("development:mongoose");

mongoose
.connect(config.get('MONGODB_URI'))
.then(function(){
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);

})
module.exports = mongoose.connection;
