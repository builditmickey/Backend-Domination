const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
	res.render("index");
});

app.get("/profile/:username", function (req, res) {
	res.send(`hey, I'm ${req.params.username}`);
});

app.listen(3000, function () {
	console.log("running!!");
});
