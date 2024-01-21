const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

mongoose
.connect("mongodb+srv://pktanwar1122:BMAd2CiHEwLjpD9P@cluster0.ppox2zc.mongodb.net/Food-app?retryWrites=true&w=majority") // here i have changed port prefix from localhost to 0.0.0.0. due to local error
// mongodb://0.0.0.0:27017/Food-app
.then(() => {
    console.log("Connected to DB");
    
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api/user", userRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

