import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

const authUser = async(req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        console.log('Error');
    }
}

// Register New User
const registerUser = async(req, res) => {
    const { name, email, password } = req.body;
    
    const userExists = await User.findOne({ email })

    if(userExists){
        res.status(400);
        console.log('User already exists');
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        console.log('Invalid user Data');
    }
}

const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id);

    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404);
        console.log('User not found');
    }
}

export {
    authUser,
    registerUser,
    getUserProfile,
}