import Question from './../models/Question'

export default async (req, res) => {
    try {
        await Question.findByIdAndRemove(req.params.id)
        return res.status(204).end()
    } catch (err) {
        return res.status(500).end()
    }
}