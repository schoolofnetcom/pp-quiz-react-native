import Subject from './../models/Subject'

export default async (req, res) => {
    let subjects = []
    try {
        subjects = await Subject.find({})

        return res.json({ subjects })
    } catch(err) {
        return res.json({ subjects })        
    }
}