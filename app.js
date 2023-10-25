const express = require("express");
const router = require("./router");
const session = require('express-session')
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({
    secret : "Secret",
    resave : false,
    saveUninitialized : false,
    cookie : { 
        secure : false,
        sameSite : true
    }
}))

app.use(router);


app.listen(port, function () {
  console.log(`bayar parkir hanya ${port}`);
});
