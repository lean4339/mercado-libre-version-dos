const fs = require("fs");

module.exports = JSON.parse(fs.readFileSync("./data/productsDataBase.json","utf-8"))