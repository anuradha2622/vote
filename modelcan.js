const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema3= new Schema({
    canid: {type: String, required: true, max: 100},
    votes: {type: Number, required: true},
    
});


// Export the model
module.exports = mongoose.model('votes', ProductSchema3);