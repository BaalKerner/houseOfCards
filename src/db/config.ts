import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/houseOfCards')
.then(
() => {
  console.log('Mondodb connected');
},
(err) => {
  console.log(`connection error: ${err}`);
});
