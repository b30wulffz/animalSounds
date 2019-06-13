// "use strict";

// //Variables
// var Alexa= require("alexa-sdk");
// var SKILL_NAME= "Animal Sounds";
// var APP_ID= "";

// //Setup
// exports.handler=function(event, context, callback){
//     var alexa=Alexa.handler(event, context);
//     alexa.APP_ID = APP_ID;

// }

// var handlers = {
//     'LaunchRequest': function() {
//         this.emit('Welcome');
//     }
//     'Welcome': function() {
//         speechOutput="Welcome to Alexa animal zoo. Just tell us the name of the animal and you will hear him speaking to you.";
//         this.emit(":tell", speechOutput);
//     }
//     'PlayAnimalSoundsIntent': function() {
//         var nameSlot = resolveCanonical(this.event.request.intent.slots.name);
//         var speechOutput= "I think you asked for a "+nameSlot;
//         this.emit(":tell", speechOutput);
//     }
// }

    
var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

    'LaunchRequest': function () {
        speechOutput="Welcome to Alexa animal zoo. Just tell us the name of the animal and you will hear him speaking to you.";
        this.emit(":ask", speechOutput);
        this.emit(":ask", 'Try asking how does a dog speaks!');
    },

    'PlayAnimalSoundsIntent': function() {
         var nameSlot = this.event.request.intent.slots.name.value;
         //var speechOutput= "I think you asked for a "+nameSlot;
         var sound='';
         if (nameSlot.toLowerCase() === 'dog') {
            sound = `<audio src="https://s3-eu-west-1.amazonaws.com/voice-devs/london-baby.mp3">`;
         }
         this.emit(":tell", `${sound}`);
    },

    'AMAZON.HelpIntent': function () {
        this.emit(":ask", 'Try asking how does a dog speaks!');
    },

    'Unhandled': function() {
        this.emit(':ask', 'Sorry I didn\'t get that!');
    },
};