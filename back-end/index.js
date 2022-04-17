const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const mongoose = require("mongoose");
const multer = require("multer");
const bodyParser = require("body-parser");
const postRouter = require("./routes/post");
const marjorRouter = require("./routes/Major");
const subjectRouter = require("./routes/Subject");
const categoryRouter = require("./routes/Category");
const path = require("path");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.listen(5000, () => {
  console.log(1234);
});

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRouter);
app.use(express.static("./upload/images"));
app.use("/marjor", marjorRouter);
app.use("/sub", subjectRouter);
app.use("/category", categoryRouter);
