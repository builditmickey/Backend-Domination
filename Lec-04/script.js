const express = require("express");
const app = express();

app.get("/", function (req, res) {
	res.send("hey ssupp");
});

app.get("/profile", function (req, res) {
	res.send("good...how r u... im fine");
});

app.listen(3000);
