const mongoose = require('mongoose');


 
const TMPSchema = new mongoose.Schema({
        name: {
            type: String,
            requires: true
        },
        age: {
            type: Number,
            requires: true
        },
        degree: {
            type: String,
            requires: false
        }
});
 
const TMPModel = mongoose.model('tmptable',TMPSchema);
module.exports = TMPModel;