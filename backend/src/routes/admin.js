const express = require("express");
const {loginAdmin} = require("../controllers/admin");
const route = express.Router();

route.post("/loginadmin",loginAdmin);

module.exports = route;
