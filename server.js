//Packages
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
const morgan = require("morgan");

//Connections
const connectdb = require("./config/connectdb");

dotenv.config({ path: "./config/.env" });

//Server App
const app = express();

//Connect To Database
connectdb();

//Parse Inputs
app.use(express.json());

//Backend Route Logs
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Import Routes
const UserRoutes = require("./routes/user");

//Use Routes
app.use("/api/v1/users", UserRoutes);

//Client Routes
app.use(express.static("client/build"));
//Serve Routes on Site
app.get("/*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

//Run Server on Dynamic Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Connected At Port ${PORT}`.yellow.bold);
});
