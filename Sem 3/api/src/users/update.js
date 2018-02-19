import User from './../models/User'

export default async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body)
        return res.status(204).end()
    } catch(err) {
        return res.status(500)
                  .json({ err })
    }
}