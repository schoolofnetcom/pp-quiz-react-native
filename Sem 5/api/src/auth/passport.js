import { Strategy } from 'passport-jwt'
import User from './../models/User'
import JwtConfigs from './config'

export default (passport) => {
    passport.use('token', new Strategy(JwtConfigs, (payload, cb) => {
        User
            .findById(payload.id)        
            .select({ name: 1, email: 1, active: 1 })
            .then((user) => {
                if (!user) {
                    return cb(null, false)
                }

                return cb(null, user)
            })
            .catch((err) => {
                return cb(err, false)
            })
    }))
}