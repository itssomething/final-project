const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    quest: { type: String },
    answer1: { type: String },
    answer2: { type: String },
    answer3: { type: String },
    answer4: { type: String },
    correctAns: { type: String },
    hint: { type: String },
    suggestion: { type: String },
    questType: { type: String },
    collection: [
        { type: Schema.Types.ObjectId, ref: 'collection' }
    ]
});

module.exports = mongoose.model("question", QuestionSchema);