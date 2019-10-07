"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const functions = require("firebase-functions");
require('dotenv').config();


const dialogFlowApp = require("./app");
const expressApp = express().use(bodyParser.json());


expressApp.post("/", dialogFlowApp);


//  EXPRESS APP test route (GET)
expressApp.get("/", (req, res) => {
    res.send("Fulfillment is here!");
});



if (process.env.NODE_ENV === 'dev') {
    const PORT = process.env.PORT | 3000;
    expressApp.listen(PORT, () =>
        console.log(`Express server started on port ${PORT}su`)
    );
} else {
    console.log("Not locally served or NODE_ENV is not set");
}


exports.fulfillmentExpressServer = functions.https.onRequest(expressApp);
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(dialogFlowApp);
