import Answer from './../models/Answer'

export default async (req, res) => {
    try {
        await Answer.findByIdAndRemove(req.params.id)
        return res.status(204).end()
    } catch (err) {
        return res.status(500).end()
    }
}