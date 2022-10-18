const User = require("../models/User");
const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require("bcryptjs")
const { body, validationResult } = require("express-validator");
const JWT_SECRET = "MYNAMEISCHANDRABHANSINGHSOLANKI"

// Create a User using :POST "/api/auth/createuser" Doesn't required Auth
router.post(
  "/createuser",
  [
    // name of the user atleast 5 charcter
    body("name", "Enter a name atleast 5 charcter").isLength({ min: 5 }),
    // email must be an email
    body("email", "Enter a valid Email").isEmail(),
    // password must be at least 5 charcter long
    body("password", "Enter a password atleast 5 charcter").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // console.log(req.body);
    try {
      // check whether the user exists already or not
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "Email already Exist" });
      }
      const salt =await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt)


    // create a new user  
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user : {
          id: user.id,
          name: user.name,
          email:user.email
        }
      }
const authtoken = jwt.sign(data,JWT_SECRET)

// console.log(authtoken);
      res.send({token:authtoken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured")
    }

    // .then(user => res.json(user))
    // .catch(err=>{console.log(err)
    // res.json({error: "please Enter a valid email"})
    // })

    // const user = User(req.body)
    // user.save()
    // res.send(req.body)
  }
);

module.exports = router;
