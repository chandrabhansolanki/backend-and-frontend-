const express = require("express")
const router = express.Router()
const fetchuser =require("../middleware/fetchuser")
const Notes = require("../models/Notes")
const { body, validationResult } = require("express-validator");


// Route:1 getall the notes using  GET:"/api/auth/getuser" LoginRequired
router.get('/fetchallnotes',fetchuser,async(req,res)=> {
  const notes = await Notes.find({user: req.user.id})
  // console.log(notes);

  res.json(notes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
})

// Route:2 Add the notes using  :POST "/api/auth/getuser" LoginRequired
router.get('/addnote',fetchuser, [
   // name of the user atleast 5 charcter
   body("title", "Enter a title atleast 5 charcter").isLength({ min: 5 }),
   // password must be at least 5 charcter long
   body("description", "Enter a Description atleast 5 charcter").isLength({
     min: 5,
   }),
],async(req,res)=> {
  

    try{
      const {tag, title, description} = req.body
      
    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

      
    }catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error ");
    }
  // console.log(notes);

  res.json(notes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
})
    
module.exports = router