const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema ({
    sport: {
        type: String,
    },
    brojNaIgraci: {
        type: Number,
    },
    topka: {
        type: String,
    },
    timskiSport: {
        type: String,
    },
    podloga: {
        type: String,
    },
    dopolnitelnaOprema: {
        type: String,
    },
});

const Sport = mongoose.model("Sport", sportSchema);

module.exports = Sport;