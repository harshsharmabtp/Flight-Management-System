const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const DtoC =  async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'Delhi to Chennai',
                        },
                        unit_amount: 12000, // Amount in cents ($2.00)
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

module.exports = {DtoC}


