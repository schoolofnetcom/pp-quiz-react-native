import Question from './../models/Question'

export default async (req, res) => {
    let questions = []
    try {
        questions = await Question.find({}).populate('subject')
        
        return res.json({ questions })
    } catch (err) {
        return res.status(500)
            .json({ err })
    }
}