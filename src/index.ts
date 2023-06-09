import fs from 'fs';
import express from 'express';
import session from 'express-session';
import { hey } from './helper.js';

console.log("wassup");

console.log(hey);

var app = express();

app.use("/js", express.static("./dist/public/js"));
app.use("/img", express.static("./public/img"));
app.use("/css", express.static("./public/css"));

app.get('/', (req, res, next) => {
    let doc = fs.readFileSync("./views/html/home.html", "utf8");
    res.send(doc);
});

app.listen(3000);