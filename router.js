/**
 * Created by alfonsonoriega on 18/9/16.
 */


function route(handle, pathname) {
    console.log("About to route a request for " + pathname);

    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }

}

exports.route = route;