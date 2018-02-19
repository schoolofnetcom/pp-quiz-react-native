import mongoose from 'mongoose'

const Answer = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    answers: [{
        text: {
            type: String,
            required: true
        },
        correct: {
            type: Boolean,
            default: false,
            required: true
        }
    }],
    subject: { type: mongoose.SchemaTypes.ObjectId, ref: 'Subject' }
})

export default mongoose.model('Answer', Answer)