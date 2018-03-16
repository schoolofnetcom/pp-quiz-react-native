import Subject from './../models/Subject'

export default async (req, res) => {
    let subject = new Subject(req.body)
    try {
        await subject.save()
        return res.status(201)
                  .json({ subject })

    } catch(err) {
        return res.status(500)
                  .json({ err })
    }    
}