const express = require("express");
const app = express();
const connectDatabase = require("./scr/database/db");
const userRoute = require("./scr/routes/user.route");

connectDatabase();

app.use(express.json());
app.use("/user", userRoute);

app.listen(3000);
