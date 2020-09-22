const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HSzwrIyXWqKfeudBM7oxUnOsJVFT5PzlUrkyo9VIixrRqUFkVQJn650LrKAI2NDbPOnsGkpNP5Dh7Nr6srMRmDf00g1N04UgU"
);

//API

//App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello word"));
app.get("/shazid", (request, response) =>
  response.status(200).send("Hi baby... ")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(" Payment Request Recived .. for amount >>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen commend
exports.api = functions.https.onRequest(app);

//example end-point
//http://localhost:5001/mazon-9f693/us-central1/api
