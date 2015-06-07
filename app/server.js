var expess, path, app;

express = require("express"),
app     = express();

app.use(express.static("dist"));
app.get("/", function (request, response) {
	response.sendFile("/dist/index.html");
});

app.listen(8080, "127.0.0.10");