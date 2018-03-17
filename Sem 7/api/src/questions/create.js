import Question from './../models/Question'
import Subject from './../models/Subject'

export default async (req, res) => {
    let question = new Question(req.body)
    try {
        let subject = await Subject.findById(req.body.subject)
        subject.questions.push(question)

        await question.save()
        await subject.save()
        
        return res.status(201)
            .json({ question })

    } catch (err) {
        return res.status(500)
            .json({ err })
    }    
}