const express = require("express");
const controller = require("../controller/user");
const userValidator = require("../utils/validators/user");
const router = express.Router();
const auth = require("../utils/auth");



//create
router.post(
    "/user",
    [userValidator.create],
    async (req, res) => {
        return await controller.create(req.body, res);
    }
    );

//login
router.post(
    "/user/login",
    [userValidator.login],
    async (req, res) => {
      return await controller.login(req.body, res);
    }
  );
    
//get user
router.get("/user", [auth.verifyToken], async (req, res) => {
    return await controller.findById(req.user.userId, res);
});
    
//update
router.patch("/user", [auth.verifyToken], async (req, res) => {
    return await controller.update(req, res);
});


module.exports = router;

