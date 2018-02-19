import Answer from './../models/Answer'
import Subject from './../models/Subject'

export default async (req, res) => {
    let answer = new Answer(req.body)
    try {
        let subject = await Subject.findById(req.body.subject)
        subject.questions.push(answer)
        subject.save()
        await answer.save()
        return res.status(201)
            .json({ answer })

    } catch (err) {
        return res.status(500)
            .json({ err })
    }    
}