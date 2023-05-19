//const Note = require('../../models/note');

module.exports = {
  create
};



async function create(req,res) {
    console.log("I am trying to create..")
    console.log(req.body)
 //   const newNote = await Note.create(req.body)
    res.json("GREAT")
    res.status(200)
}