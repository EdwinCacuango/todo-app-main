const express = require('express')
// const cors = require('cors')

const app = express()
app.use(express.json())
const fs = require('fs')
const filePath = './data/notes.json'

// acá tienes que apuntar el build de tu front
app.get('/', (request, response) => {
  response.send('<h1>Hola de nuevo</h1>')
})

app.get('/api/notes', (request, response) => {
  // metodo para extraert todas las notas
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      response.send(data)
    }
  })
})
// Obtener una nota según el id
app.get('/api/notes/:id', (request, response) => {
  const id = +request.params.id

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const dataParsed = JSON.parse(data)
      const selectedNote = dataParsed.filter(note => note.id === id)
      response.send(selectedNote)
    }
  })
})
// Añadir una nota
app.post('/api/notes', (request, response) => {
  const note = request.body
  let dataParsed
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      dataParsed = JSON.parse(data)
      // Extract used id to generate new id
      const idUsed = dataParsed.map(note => note.id)
      // // Crete a new note
      const newNote = {
        id: Math.max(...idUsed) + 1,
        content: note.content,
        complete: note.complete
      }
      dataParsed.push(newNote)

      fs.writeFileSync(filePath, JSON.stringify(dataParsed))
      response.send('Data enviada')
    }
  })
})
// Pendientes:
// Eliminar una nota según el id
// Actualizar el estado de una nota, con el check en el boton
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})
