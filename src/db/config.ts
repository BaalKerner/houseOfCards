import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/houseOfCards');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mondodb connected')
});
