function route (pathname) {
    // console.log("About to route a request for " + pathname);
    if (pathname !== '/favicon.ico') console.log("路由地址: " + pathname);
}

exports.route = route