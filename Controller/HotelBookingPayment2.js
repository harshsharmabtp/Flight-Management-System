const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const paymenting2 = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd', // Currency set to INR
                        product_data: {
                            name: 'Ocean Breeze Resort', // Update product name if needed
                        },
                        unit_amount: 87 * 100, 
                    
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/complete`,
            cancel_url: `${process.env.BASE_URL}/cancel`,
        });

        console.log(session); // Log session data for debugging
        res.redirect(303, session.url); // Redirect to Stripe Checkout

    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).send('Something went wrong during checkout!',error.message);
    }
};

module.exports = {paymenting2};