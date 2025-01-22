const mongoose = require('mongoose');

try {
    
    if(mongoose.connect(process.env.Mongodb_URL)){

        console.log(`Database Connection Successfull`)
    }

} catch (error) {
    
    console.log(`Database Connection Error`,error.message)
}