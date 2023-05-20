const express = require("express");
const app = express();
const userRoute = require("./scr/routes/user.route");

app.use(express.json());
app.use("/user", userRoute);

app.listen(3000);
