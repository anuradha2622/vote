const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    voterid: {type: Number, required: true},
    votingbooth:{type:String,required:true,max:100},
    area:{type:String,required:true,max:100}
});


// Export the model
module.exports = mongoose.model('voters', ProductSchema);