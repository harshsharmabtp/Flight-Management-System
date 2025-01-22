const mongoose = require('mongoose')
const user = require('../Model/hotelbooking')


const hotelbooking = async(req,res)=>{


    try {
        
        const {FullName,Email,Contact,GuestNumber,RoomNumbers,CheckInDate,CheckoutDate,FoodService,OtherFacilities,RoomType} = req.body


    const myuser = new user({

        FullName,
        Email,
        Contact,
        GuestNumber,
        RoomNumbers,
        CheckInDate,
        CheckoutDate,
        FoodService,
        OtherFacilities,
        RoomType,
    })


    const result = await myuser.save()

    res.status(201).json({ success: true, message: "Data Inserted Successfully", bookingId: result._id });

    console.log(result)

    } catch (error) {
        

        res.status(400).json({error:error.message})
    }
    
}


module.exports = {hotelbooking}