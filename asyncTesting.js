/**
 * Created by alfonsonoriega on 12/6/16.
 */

var Promise = require('bluebird');



function callFunction(method)
{

    console.log("Requesting json for "+method)
    // TODO handle with errors
}

function reqHandler(listOfMed) {

 return Promise.all(listOfMed.map(function(method) {
        callFunction(method);
 }))
}

exports.reqHandler = reqHandler;


