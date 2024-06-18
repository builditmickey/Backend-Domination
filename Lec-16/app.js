const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
	res.send("heyy");
});

app.get("/create", async (req, res) => {
	let user = await userModel.create({
		username: "Manminder",
		email: "Manminder@gmail.com",
		age: 21,
	});

	res.send(user);
});

app.get("/post/create", async (req, res) => {
	let post = await postModel.create({
		postdata: "hello guyzzz",
		user: "667064e7d497956ad28fdbaf",
	});

	let user = await userModel.findOne({ _id: "667064e7d497956ad28fdbaf" });
	user.posts.push(post._id);
	await user.save();

	res.send({ post, user });
});

app.listen(3000);
