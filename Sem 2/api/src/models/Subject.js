import mongoose from 'mongoose'

const Subject = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String
})

export default mongoose.model('Subject', Subject)