var reqHandler = require('./asyncTesting');
var Promise = require('bluebird');



var listOfMed = ["med1","med2","med3"];

function postMethod() {
    console.log("Post done")
}

reqHandler.reqHandler(listOfMed)
    .then(postMethod());

