const mongoose = require('mongoose')
const HotelBookingInfo = require('../Model/HotelListBooking');


const insertion = async(req,res)=>{

    try {
        

        const hotel1 = new HotelBookingInfo({


            HotelName:"The Grand Horizon Hotel",
            HotelEmail:"contact@grandhorizonhotel.com",
            Contact:"+1 (800) 123-4567",
            Address:"34, Taj Road, Near Taj Mahal, Agra, Uttar Pradesh 282001, India",
            FoodService:"Multi-Cuisine Buffet (Indian, Continental, Chinese)",
            RoomType:"Mughal Suite, Royal Room, Deluxe Double Room",
            OtherFacilities:"24/7 Concierge Service, Rooftop Pool, Spa & Wellness Center, Business Center, Free Wi-Fi",
            Price:"₹25,000 per night",
            location:"Agra"

        })

        const hotel2 = new HotelBookingInfo({

            HotelName:"Ocean Breeze Resort",
            HotelEmail:"info@oceanbreezeresort.com",
            Contact:"+1 (800) 234-5678",
            Address:"58, Palace Road, Amber Fort, Jaipur, Rajasthan 302001, India",
            FoodService:"Traditional Rajasthani Thali and BBQ Nights",
            RoomType:"Mountain View Suite, Honeymoon Cottage, Executive Room",
            OtherFacilities:"Private Beach Access, Yoga & Meditation Center, Water Sports Activities, Free Shuttle Service, Spa",
            Price:"₹7,500 per night",
            location:"Jaipur"

        })

        const hotel3 = new HotelBookingInfo({

            HotelName:"Sunset Ridge Inn",
            HotelEmail:"reservations@sunsetridgeinn.com",
            Contact:"+1 (800) 345-6789",
            Address:"12, Connaught Place, New Delhi, Delhi 110001, India",
            FoodService:"Gourmet Indian and International Dishes",
            RoomType:"Beachfront Suite, Lagoon View Room, Poolside Villa",
            OtherFacilities:"Fitness Center, Conference Rooms, Rooftop Restaurant, Private Parking, Free Wi-Fi",
            Price:"₹18,000 per night",
            location:"Delhi"

        })

        const hotel4 = new HotelBookingInfo({

            HotelName:"Majestic Oaks Hotel",
            HotelEmail:"bookings@majesticoakshotel.com",
            Contact:"+1 (800) 456-7890",
            Address:"101, Marine Drive, Colaba, Mumbai, Maharashtra 400020, India",
            FoodService:"Fine Dining with a Seafood Specialization",
            RoomType:"Lakefront Villa, Garden View Room, Family Suite",
            OtherFacilities:"Infinity Pool, Wellness Spa, Nightlife Entertainment, Business Lounge, Valet Parking",
            Price:"₹12,000 per night",
            location:"Mumbai"

        })

        const hotel5 = new HotelBookingInfo({

            HotelName:"Crystal Waters Retreat",
            HotelEmail:"info@crystalwatersretreat.com",
            Contact:"+1 (800) 567-8901",
            Address:"29, Brigade Road, MG Road, Bengaluru, Karnataka 560001, India",
            FoodService:"Vegetarian Delights and Health-Conscious Organic Options",
            RoomType:"Beachfront Suite, Lagoon View Room, Poolside Villa",
            OtherFacilities:"Private Lake Access, Nature Trails, Outdoor Jacuzzi, Pet-Friendly Rooms, 24/7 Room Service",
            Price:"₹20,000 per night",
            location:"Bangaluru"

        })

        const hotel6 = new HotelBookingInfo({

            HotelName:"The Royal Palms Resort",
            HotelEmail:"contact@royalpalmsresort.com",
            Contact:"+1 (800) 678-9012",
            Address:"45, East Coast Road, Neelankarai, Chennai, Tamil Nadu 600041, India",
            FoodService:"South Indian Buffet with Live Cooking Stations",
            RoomType:"Lakefront Villa, Garden View Room, Family Suite",
            OtherFacilities:"Private Pool Villas, Golf Course, Water Park, Banquet Halls, Wellness Retreat",
            Price:"₹18,000 per night",
            location:"Chennai"

        })

        const hotel7 = new HotelBookingInfo({

            HotelName:"Luxe Haven Suites",
            HotelEmail:"support@luxehavensuites.com",
            Contact:"+1 (800) 890-1234",
            Address:"8, Mall Road, Ridge, Shimla, Himachal Pradesh 171001, India",
            FoodService:"Traditional Mughlai Cuisine and Continental Fare",
            RoomType:"Presidential Suite, Ocean View Room, Standard Twin Room",
            OtherFacilities:"Mountain Trekking Tours, Skiing Facilities, Hot Tub, Campfire Area, Kids Play Zone",
            Price:"₹30,000 per night",
            location:"Shimla"

        })

        const hotel8 = new HotelBookingInfo({

            HotelName:"Elysian Heights Hotel",
            HotelEmail:"info@elysianheightshotel.com",
            Contact:"+1 (800) 901-2345",
            Address:"77, Fatehabad Road, Near Sikandra, Agra, Uttar Pradesh 282007, India",
            FoodService:"Outdoor Dining with Rajasthani Royal Cuisine",
            RoomType:"Luxury Suite, Deluxe Room, Budget Room",
            OtherFacilities:"Historical Tour Packages, Luxury Shuttle Service, Private Garden, Yoga Classes, High-Speed Internet",
            Price:"₹15,000 per night",
            location:"Agra"

        })

        const hotel9 = new HotelBookingInfo({

            HotelName:"Whispering Pines Lodge",
            HotelEmail:"contact@whisperingpineslodge.com",
            Contact:"+1 (800) 012-3456",
            Address:"15, Jaipur-Delhi Highway, Pushkar, Jaipur, Rajasthan 305022, India",
            FoodService:"Coastal Seafood Delicacies and Beachside Barbecue",
            RoomType:"Ocean View Suite, Poolside Room, Garden View Room",
            OtherFacilities:"Open-Air Dining, Hiking Trails, Horseback Riding, Wellness Spa, Free Bicycle Rentals",
            Price:"₹12,000 per night",
            location:"Jaipur"

        })

        const hotel10 = new HotelBookingInfo({

            HotelName:"Serenity Bay Resort",
            HotelEmail:"info@serenitybayresort.com",
            Contact:"+1 (800) 901-2345",
            Address:" 32, Juhu Beach, Juhu, Mumbai, Maharashtra 400049, India",
            FoodService:"Fine Dining with a Seafood Specialization",
            RoomType:"Deluxe Suite, Executive Room, Standard Room",
            OtherFacilities:"Private Beach Cabanas, Sunset Cruises, Fishing Trips, BBQ Facilities, 24/7 Concierge",
            Price:"₹10,000 per night",
            location:"Mumbai"

        })


        const result = await HotelBookingInfo.insertMany([hotel1,hotel2,hotel3,hotel4,hotel5,hotel6,
        hotel7,hotel8,hotel9,hotel10
        ])

        console.log("Data Inserted Successfully")
        
    } catch (error) {
        
        console.log(error.message)
    }

    
}

// insertion()





module.exports = {HotelBookingInfo}