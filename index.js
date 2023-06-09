const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const Route = require("./config/routes");
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({}));
app.use(Route);




app.listen(3001, () => {console.log("Server Started at http://localhost:3001")})