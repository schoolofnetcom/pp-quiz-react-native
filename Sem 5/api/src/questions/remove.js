import Question from './../models/Question'
import Subject from './../models/Subject'

export default async (req, res) => {
    try {
        let question = await Question.findById(req.params.id).populate('subject')
        let subject = await Subject.findById(question.subject._id)
        subject.questions.pull({ _id: question._id })
        
        await subject.save()
        await question.remove()
        
        return res.status(204).end()
    } catch (err) {
        console.log(err)
        return res.status(500).end()
    }
}