const express = require("express")
const router = express.Router()
const fetchuser = require("../middleware/fetchuser")
const Note = require("../models/Note")
const { body, validationResult } = require("express-validator");


// Route:1 getall the notes using  GET:"/api/notes/fetchallnotes" LoginRequired
router.get('/fetchallnotes', fetchuser, async (req, res) => {


  try{
    const notes = await Note.find({ user: req.user.id })
    res.json(notes)
  }catch(error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error ");
  }
  
})

// Route:2 Add the notes using POST: "/api/notes/addnote" LoginRequired
router.post('/addnote', fetchuser, [

  // name of the user atleast 5 charcter
  body("title", "Enter a title atleast 5 charcter").isLength({ min: 5 }),
  // password must be at least 5 charcter long
  body("description", "Enter a Description atleast 5 charcter").isLength({
    min: 5,
  }),
], async (req, res) => {
  try {
    const {  title, description,tag } = req.body
    // if there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
      title, description, tag, user: req.user.id
    })

    const savedNote =await note.save()
    res.json(savedNote)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error ");
  }
  // console.log(notes);

})


// Route:3 Update an existing notes using POST: "/api/notes/updatenote" LoginRequired

router.post("./updatenote/:id", fetchuser, async (req, res) => {
  const newNote = {}
  if(title){
newNote.title = title
  }
})



module.exports = router