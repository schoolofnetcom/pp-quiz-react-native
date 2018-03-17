import Subject from './../models/Subject'

export default async (req, res) => {
    try {
        await Subject.findByIdAndRemove(req.params.id)
        return res.status(204).end()
    } catch(err) {
        return res.status(500).end()
    }
}