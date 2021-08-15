
const express = require("express");
const router = require('./router');
const db = require("./config/mongoose");
const app = express();
const port = process.env.PORT || 3005;
const cors = require('cors');

//Middleware
app.use(express.json());
app.use(cors());
app.use(router);


db
.then(() => {
    app.listen(port, () => console.log(`Node server runing` ));
})
.catch((err) => console.log(err.message));