const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const ConnectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoute.js");

ConnectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
