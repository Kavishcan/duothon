const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

/** import connection file */
const connect = require("./database/conn.js");

const app = express();

/** app middlewares */
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

/** appliation port */
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/transportPassRoutes"));
app.use("/api", require("./routes/publicTransportRoutes"));
app.use("/api", require("./routes/paymentRoutes"));

/** start server only when we have valid connection */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server ");
    }
  })
  .catch((error) => {
    console.log(`Invalid Database Connection`, error);
  });
