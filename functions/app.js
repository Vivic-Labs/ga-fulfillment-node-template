const {dialogflow} = require("actions-on-google");

const app = dialogflow();

// Register handlers for Dialogflow intents

app.intent('Default Welcome Intent', (conv) => {
    conv.ask('Hello, how can I help you?');
});


module.exports = app;


