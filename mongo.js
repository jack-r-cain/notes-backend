//run node mongo.js to test connection to MongoDB
// This script connects to a MongoDB database and saves a test note.

const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.TEST_MONGODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Bing bop boop bop boop bop bam',
  important: false,
})

note.save().then((result) => {
  console.log('note saved!')
  mongoose.connection.close()
})

// Note.find({}).then((result) => {
//   result.forEach((note) => {
//     console.log(note)
//   })
//   mongoose.connection.close()
// })
