const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51LKK2NSBO9vBJlkDiAw5fVbmpghWX8wktTUtUmZpgo7nT4Vvk3JZ01umHN7exIghDGzoSM4ix45vPFJRgcyriBU400La0DWeS3"
);

//API
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("Hello Rashmi"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("paymenent request recieved boooo", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    description: 'Software development services',
    shipping: {
      name: 'Kumari Rashmi',
      address: {
        line1: 'HSR Layout Bangalore',
        postal_code: '560068',
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'US',
      },
    },
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);

