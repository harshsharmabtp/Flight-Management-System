const mongoose = require('mongoose')

const hbook = new mongoose.Schema({

    HotelName:{

        require:true,
        type:String,
    },

    HotelEmail:{

        require:true,
        type:String,
    },

    Contact:{

        require:true,
        type:String,
    },

    Address:{

        require:true,
        type:String,
    },
    
    FoodService:{

        require:true,
        type:String,
    },

    RoomType:{

        require:true,
        type:String,
    },



    OtherFacilities:{

        require:true,
        type:String,
    },

    Price:{

        require:true,
        type:String,
    },

    location:{

        require:true,
        type:String,
    }, 

    
})


const HotelBookingInfo = new mongoose.model('HotelBookingInfo',hbook)

module.exports = HotelBookingInfo