const jwt = require('jsonwebtoken');
const {
    JWT_SECRET,
    JWT_SECRET_REFRESH_TOKEN,
    JWT_TOKEN_EXPIRED,
    JWT_TOKEN_REFRESH_EXPIRED
} = process.env;

module.exports = async (req, res, next) => {
    // get token from headers
    const token = req.headers.authorization;

    // verifikasi token
    jwt.verify(token, JWT_SECRET, (err, decode) => {
        if(err) {
            return res.status(403).json({
                status: 'error',
                message: err.message
            })
        }

        req.user = decode;

        return next();
    })
}