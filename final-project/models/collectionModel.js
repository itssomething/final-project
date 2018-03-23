const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
    description: {type: String},
    level: {type: String},
    rating: {type: Number, default: null}
});

module.exports = mongoose.model("collection", QuestionSchema);