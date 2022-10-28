const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

console.log("The server is now up!")
console.log("Copyright © Team Lunar 2022")

app.use('/', express.static(__dirname + '/static/'))
app.listen(8080)