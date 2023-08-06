const express = require('express');
const {
    registerUser,
    loginUser,
    logoutUser
} = require('../controllers/userController')

const userMiddleware = require('../middleware/userMiddleware');

const router = express.Router();

//signup
router.post('/register', registerUser);

//login

router.post('/login', loginUser);

// logout

router.post('/logout', (req, res) => {
    res.clearCookie('jwt');
    res.json({ msg: 'Logged out successfully' });
});

router.get('/protected' , userMiddleware, (req, res) => {
    res.json({ msg: 'This is a protected route' , user: req.user });
})

module.exports = router;