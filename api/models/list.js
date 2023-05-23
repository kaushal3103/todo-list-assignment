const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  textarea:{
    type:String,
    required:[true,'Please provide text'],
    minlength:3,
    maxlength:100,
  }
})

module.exports = mongoose.model('List',ListSchema);