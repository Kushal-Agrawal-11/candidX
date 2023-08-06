const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");

// Registration

// @desc Register new user
// @route POST /api/users
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email,  password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // if user exists 

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error ('User already exists')
    }


    // Hashing Password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User

    const user = await User.create({
        firstName,
        lastName,
        email,
        password : hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id : user.id,
            message : "User Registration Successful",
            firstName: user.firstName,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})


// LOGIN

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public 

const loginUser = asyncHandler(async (req, res) => {
    const { email,  password} = req.body

    // Check for user email

    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id : user.id,
            message : "Login Success" ,
            firstName : user.firstName,
            email : user.email,
            token : generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})


// @desc Get user data
// @route GET /api/users/me
// @access Private

// const getMe = asyncHandler(async (req, res) => {
//     res.status(200).json(req.user)
// })

const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: 'Logged out successfully' });
};

// Generate JWT

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET , {
        expiresIn: '30d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser
}

