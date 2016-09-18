/**
 * Created by alfonsonoriega on 18/9/16.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);