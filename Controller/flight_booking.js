const mongoose = require('mongoose')
const bookme = require('../Model/flightbookingform');

const insert = async(req,res)=>{

    try {
        
        const {FirstName,dob,email,contact,from,to,TravelDate,DepartureDate,TravelClass,SeatPref,LastName} = req.body

        const newBooking = new bookme({
            FirstName,
            LastName,
            dob,
            email,
            contact,
            from,
            to,
            TravelDate,
            DepartureDate,
            TravelClass,
            SeatPref,
            
        });

        const result = await newBooking.save(req.body)
        console.log(result)
        res.status(201).json({message:"Data Inserted Successfully"})


    } catch (error) {
        
        res.status(400).json({error:error.message})
    }
    
}

//insert()
module.exports = {insert}