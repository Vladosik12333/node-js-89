const controllers = require("../controllers/users");

const express = require("express");

const router = express.Router();

const wrapper = require("../helpers/wrapper");

router.get("/login", wrapper(controllers.userLogin));
module.exports = router;
