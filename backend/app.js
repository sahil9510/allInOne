require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user-routes");
const notesRouter = require("./routes/notes-routes");
const newsRouter = require("./routes/news-routes")

const app = express();
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
  next();
});

app.use("/api/",userRouter);
app.use("/api/",newsRouter);
app.use("/api/notes",notesRouter)

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  console.log("Error");
  res.status(error.code || 500);
  res.json({ message: error.message || "ERROR"});
});

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || 5000);
  }
});
