const mongoose = require('mongoose')

const curry = new mongoose.Schema({

    Country_Code:{

        require:true,
        type:String,

    },


    currency:{

        require:true,
        type:String,
    },

    Indian_Currency:{

        require:true,
        type:String,
    },
})

const Currency = new mongoose.model('Currency',curry)

module.exports = Currency