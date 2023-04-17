import fs from 'fs';
import express from 'express';
import { hey } from './helper.js';
console.log("wassup");
console.log(hey);
var app = express();
app.get('/', (req, res, next) => {
    let doc = fs.readFileSync("./views/html/index.html", "utf8");
    res.send(doc);
});
app.listen(3000);
//# sourceMappingURL=index.js.map