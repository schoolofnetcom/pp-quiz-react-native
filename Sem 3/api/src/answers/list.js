import Answer from './../models/Answer'

export default async (req, res) => {
    let answers = []
    try {
        answers = await Answer.find({}).populate('subject')

        return res.json({ answers })
    } catch (err) {
        return res.status(500)
            .json({ err })
    }
}