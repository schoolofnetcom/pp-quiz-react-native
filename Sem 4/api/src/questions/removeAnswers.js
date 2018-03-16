import Question from './../models/Question'

export default async (req, res) => {
    try {
        let question = await Question.findOne({ _id: req.params.id })

        question.answers.pull({ _id: req.params.idAnswer })
        await question.save()

        return res.status(204).end()
    } catch(err) {
        return res.status(500)
                  .json({ err })
    }


}