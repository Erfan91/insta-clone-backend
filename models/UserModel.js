const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    image: String,
    birthDate: Date,
    phoneNumber: Number,
    password: String,
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Posts'
    },
    followers: Number,
    following: Number,
    likes: {
        type: mongoose.Types.ObjectId,
        ref: "Likes"
    }
},{
    timestamps: true
});

const UserModel = new mongoose.model("User", UserSchema);
module.exports = UserModel