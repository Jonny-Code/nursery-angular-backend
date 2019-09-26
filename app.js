const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/users");
const config = require("./config/db");

// handle deprecation warnings
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

// connect to db
mongoose.connect(config.database);
mongoose.connection.on("connected", () => {
  console.log(`Connected to database ${config.database}`);
});
mongoose.connection.on("error", err => {
  console.log(`Database connection error ${err}`);
});

const app = express();

// cors middleware
app.use(cors());

// set the static folder
app.use(express.static(path.join(__dirname, "public")));

// body-parser middleware
app.use(bodyParser.json());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// temp home route
app.get("/", (req, res) => {
  res.send("Home route");
});

// user route
app.use("/users", users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));
