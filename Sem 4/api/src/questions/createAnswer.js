import Question from './../models/Question'

export default async(req, res) => {
    try {
        let question = await Question.findOne({ _id: req.params.id })

        question.answers.push(req.body)
        await question.save()

        return res.status(201)
                  .json({ question })
    } catch(err) {
        return res.status(500)
                  .json({ err })
    }
}