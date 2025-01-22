const mongoose = require('mongoose')

let book = new mongoose.Schema({

    FirstName:{

        require:true,
        type:String,
    },

    LastName:{
        
        require:true,
        type:String,
    },

    dob:{

        require:false,
        type:String,
    },

    email:{

        require:true,
        type:String,
    },

    contact:{
        
        require:true,
        type:Number,
    },

    from:{

        require:true,
        type:String,
    },

    to:{

        require:true,
        type:String,
    },

    TravelDate:{

        require:true,
        type:String,
    },


    DepartureDate:{

        require:false,
        type:String,
    },

    TravelClass:{

        require:true,
        type:String,
    },

    SeatPref:{

        type:String,
        require:true,
    },

})



const Booking = new mongoose.model('Booking',book)
module.exports = Booking