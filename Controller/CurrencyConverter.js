const mongoose = require('mongoose')
const Currency = require('../Model/CurrencyConverter')


const Inserting = async(req,res)=>{


    try {
        

        const curr1 = new Currency({

            Country_Code:"USD",
            currency:"US Dollar",
            Indian_Currency:"₹82.00",
        })

        const curr2 = new Currency({

            Country_Code:"EUR",
            currency:"Euro",
            Indian_Currency:"₹90.00",
        })

        const curr3 = new Currency({

            Country_Code:"GBP",
            currency:"British Pound ",
            Indian_Currency:"₹103.00",
        })

        const curr4= new Currency({
            
            Country_Code:"AUD",
            currency:"Australian Dollar",
            Indian_Currency:"₹54.00",
        })

        const curr5 = new Currency({

            Country_Code:"CAD",
            currency:"Canadian Dollar",
            Indian_Currency:"₹60.00",
        })

        const curr6 = new Currency({

            Country_Code:"CHF",
            currency:"Swiss Franc",
            Indian_Currency:"₹92.00",
        })

        const curr7 = new Currency({

            Country_Code:"JPY",
            currency:"Japanese Yen",
            Indian_Currency:"₹0.56",
        })

        const curr8 = new Currency({

            Country_Code:"CNY",
            currency:"Chinese Yuan",
            Indian_Currency:"₹11.00",
        })

        const curr9 = new Currency({

            Country_Code:"SGD",
            currency:"Singapore Dollar",
            Indian_Currency:"₹61.00",
        })

        const curr10 = new Currency({

            Country_Code:"AED",
            currency:"UAE Dirham",
            Indian_Currency:"₹22.00",
        })

        const curr11 = new Currency({

            Country_Code:"NZD",
            currency:"New Zealand Dollar",
            Indian_Currency:"₹50.00",
        })

        const curr12 = new Currency({

            Country_Code:"MYR",
            currency:"Malaysian Ringgit",
            Indian_Currency:"₹18.50",
        })

        
        const result = await Currency.insertMany([curr1,curr2,curr3,curr4,curr5,curr6,curr7,curr8,
        curr9,curr10,curr11,curr12])


        console.log("Data Inserted Successfully",result)

    } catch (error) {
        
        
        console.log("Error Encountered",error.message)
    }
}

// Inserting()



module.exports = { Currency }

