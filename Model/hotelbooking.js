const mongoose = require('mongoose')

const hbooking = new mongoose.Schema({

    FullName:{

        require:true,
        type:String,
    },

    Email:{

        require:true,
        type:String,
    },

    Contact:{

        require:true,
        type:Number,
    },

    GuestNumber:{

        require:true,
        type:String,
    },
    
    RoomNumbers:{

        require:true,
        type:String,
    },

    CheckInDate:{

        require:true,
        type:String,
    },

    CheckoutDate:{

        require:true,
        type:String,
    },

    FoodService:{

        require:true,
        type:String,
    },

    OtherFacilities:{

        require:true,
        type:String,
    },

    RoomType:{

        require:true,
        type:String,
    },
})


const HotelBooking = new mongoose.model('HotelBooking',hbooking)

module.exports = HotelBooking