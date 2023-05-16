const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const sportistSchema = new mongoose.Schema ({
    ime: {
        type: String,
        required: [true, "Imeto e zadolzitelno"],
    },
    prezime: {
        type: String,
        required: [true, "Prezime e zadolzitelno"],
    },
    email: {
        type: String,
        required: [true, "Email e zadolzitelno"],
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, "Ve molime stavete validen email"],
    },
    password: {
        type: String,
        required: [true, "Ve molime vnesete lozinka"],
        minlength: [8, "Lozinkata mora da e dolga najmalku 8 karakteri"],
    },

    passwordResetToken: String,
    passwordResetExpired: Date,
});

sportistSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const Sportist = mongoose.model("Sportist", sportistSchema);

module.exports = Sportist;