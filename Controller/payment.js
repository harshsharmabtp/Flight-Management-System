const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const pay =  async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Node.js and Express Book',
                        },
                        unit_amount: 1, // Amount in cents ($2.00)
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/complete`,
            cancel_url: `${process.env.BASE_URL}/cancel`,
        });

        console.log(session);
        res.redirect(303, session.url); // Redirect to Stripe Checkout

    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).send('Something went wrong during checkout!');
    }
};

module.exports = {pay}


