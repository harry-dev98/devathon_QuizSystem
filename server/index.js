const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const cors = require("cors");
const router = require("./Routes/Router");
const port = 5005; // process.env.DEPLOY_PORT;

//db
mongoose
  .connect("mongodb://127.0.0.1:27017/quiz",{ //process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB is connected");
  });

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' })) 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
app.use(express.json());

//routes

app.use("/api", router);

// comment out following lines in production if commented
// app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));


// app.get('/', (req, res)=>{
//     res.send("GGWP ")
// })
// comment out following lines in production if commented
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/../build/index.html"));
// });

app.listen(port, () => {
  console.log("app listen on port", port);
});
