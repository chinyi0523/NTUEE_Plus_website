var mongoose = require('mongoose')

//數據地址
DB_URL = "mongodb://heroku_kbtrwz4h:f13g3thhm7uo2ip6o2qcnaufk9@ds155718.mlab.com:55718/heroku_kbtrwz4h"
//"mongodb://heroku_b6klgxdz:lmed4cj2a50535mbei4fnsfq58@ds213529.mlab.com:13529/heroku_b6klgxdz"
// ; // || process.env.MONGODB_URI || 'mongodb://localhost:27017/mongoose';

mongoose.connect(DB_URL);
console.log('connect success');

mongoose.connection.on('disconnected',function(){
    console.log('connect wrong');
})

module.exports = mongoose;
//mongodb://heroku_kbtrwz4h:f13g3thhm7uo2ip6o2qcnaufk9@ds155718.mlab.com:55718/heroku_kbtrwz4h
//mongodb://heroku_b6klgxdz:lmed4cj2a50535mbei4fnsfq58@ds213529.mlab.com:13529/heroku_b6klgxdz