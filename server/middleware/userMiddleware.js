const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET

const userMiddleware = (req, res, next) => {
    const token = req.cookies.jwt;

    if(!token) {
        return res.status(401).json({ msg: "No token, authorization denied"});
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ msg: 'Token is not valid '});
    }
}

module.exports = userMiddleware;