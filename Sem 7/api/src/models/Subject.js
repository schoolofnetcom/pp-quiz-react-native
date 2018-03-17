import mongoose from 'mongoose'

const Subject = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    questions: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Question' }]
})

export default mongoose.model('Subject', Subject)