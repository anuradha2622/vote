const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ProductSchema2 = new Schema({
  canditatename: {type: String, required: true, max: 100}
    
});
module.exports = mongoose.model('canditates', ProductSchema2);
