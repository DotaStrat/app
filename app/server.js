var express = require("express");
var path = require("path");
var steamAuth = require(path.join( __dirname, "server/steamAuth/entry.js"));
var app = express();


app.use(express.static("dist"));

app.get("/", function (request, response) {
    response.sendFile("/dist/index.html");
});

steamAuth.make({
    app: app,
    authUrl: "/auth/steam",
    returnUrl: '/auth',
    realm: 'http://localhost:8080',
    apiKey: 'B492063821816DFE018E26C946B0752A'
});

app.listen(8080, "127.0.0.10");