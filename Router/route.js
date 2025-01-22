const express = require('express')
const router = express.Router()
const { register, login, logout } = require('../Controller/registerloginlogout')
const verification = require('../Middleware/middleware')
const { insert } = require('../Controller/flight_booking')
const { pay } = require('../Controller/payment')
const { DtoC } = require('../Controller/DtoC')
const { HotelBookingInfo } = require('../Controller/HotelListBooking')
const { hotelbooking } = require('../Controller/HotelBooking')
const { paymenting1 } = require('../Controller/HotelBookingPayment1')
const { paymenting2 } = require('../Controller/HotelBookingPayment2')
const { paymenting3 } = require('../Controller/HotelBookingPayment3')
const { paymenting4 } = require('../Controller/HotelBookingPayment4')
const { paymenting5 } = require('../Controller/HotelBookingPayment5')
const { paymenting6 } = require('../Controller/HotelBookingPayment6')
const { paymenting7 } = require('../Controller/HotelBookingPayment7')
const { paymenting8 } = require('../Controller/HotelBookingPayment8')
const { paymenting9 } = require('../Controller/HotelBookingPayment9')
const { paymenting10 } = require('../Controller/HotelBookingPayment10')
const {Currency} = require('../Controller/CurrencyConverter')


const path = require('path')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/register.html'))
})

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout, verification)
router.post('/booking', insert)
router.get('/checkout', pay)
router.post('/hotelbookform', hotelbooking)

router.get('/complete', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/complete.html'))
})
router.get('/cancel', (req, res) => {
  res.send('Payment Failed')
})

// For Cardd
router.get('/DelhiToChennai', DtoC)

router.get('/fetchHotels', async (req, res) => {
  try {
    const hotels = await HotelBookingInfo.find() // Fetch all hotels
    res.status(200).json(hotels) // Send hotels data as response
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.get('/pays1', paymenting1)
router.get('/pays2', paymenting2)
router.get('/pays3', paymenting3)
router.get('/pays4', paymenting4)
router.get('/pays5', paymenting5)
router.get('/pays6', paymenting6)
router.get('/pays7', paymenting7)
router.get('/pays8', paymenting8)
router.get('/pays9', paymenting9)
router.get('/pays10', paymenting10)



router.get('/CurrencyConverter', async(req,res)=>{

  try {
    

    const result = await Currency.find()

    res.status(201).json(result)

  } catch (error) {
    

    res.status(400).json(error.message)
  }
})

module.exports = router
