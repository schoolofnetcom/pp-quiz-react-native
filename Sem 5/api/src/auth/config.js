import { ExtractJwt } from 'passport-jwt'

export default {
    secretOrKey: '1232@*#^#*@!3156f@*#^#*@!45f64da@*#^#*@!',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
}