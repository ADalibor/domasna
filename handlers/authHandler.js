const Sportist = require('../pkg/sportisti/sportistiSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    try {
        const novSportist = await Sportist.create ({
            ime: req.body.ime,
            prezime: req.body.prezime,
            email: req.body.email,
            password: req.body.password,
        });

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES,
          });
      
          res.cookie("jwt", token, {
            expires: new Date(
              Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            secure: false,
            httpOnly: true,
          });

          res.status(201).json({
            status: "success",
            token,
            data: {
                user: novSportist,
            },
          });
    } catch (err) {
        return res.status(500).send(err);
    }
};