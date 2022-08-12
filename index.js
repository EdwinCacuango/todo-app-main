const express = require('express')
// const cors = require('cors')

const app = express()
app.use(express.json())
const fs = require('fs')
const filePath = './data/tasks.json'

// acá tienes que apuntar el build de tu front
app.get('/', (request, response) => {
  response.send('<h1>Hola de nuevo</h1>')
})

app.get('/api/tasks', (request, response) => {
  // metodo para extraert todas las tareas
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      response.send(data)
    }
  })
})
// Obtener una tarea según el id
app.get('/api/tasks/:id', (request, response) => {
  const id = +request.params.id

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const dataParsed = JSON.parse(data)
      const selectedTask = dataParsed.filter(task => task.id === id)
      response.send(selectedTask)
    }
  })
})
// Añadir una tarea
app.post('/api/tasks', (request, response) => {
  const task = request.body
  let dataParsed
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      dataParsed = JSON.parse(data)
      // Extract used id to generate new id
      const idUsed = dataParsed.map(task => task.id)
      // // Crete a new task
      const newTask = {
        id: Math.max(...idUsed) + 1,
        content: task.content,
        complete: task.complete
      }
      dataParsed.push(newTask)

      fs.writeFileSync(filePath, JSON.stringify(dataParsed))
      response.send('Data enviada')
    }
  })
})

// Actualizar el estado de una tarea, con el check en el boton
app.put('/api/tasks/:id', (request, response) => {
  const task = request.body
  const id = +request.params.id

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      // Get all data
      const dataParsed = JSON.parse(data)
      // Buscar el elemento a cambiar
      const existentTask = dataParsed.filter(task => task.id === id)
      // Updated task
      const updatedTask = {
        ...existentTask[0],
        complete: task.complete
      }
      // Extract all tasks not changed
      const cleanArray = dataParsed.filter(task => task.id !== id)
      // Concat updated task and tasks not changed
      cleanArray.push(updatedTask)
      // Sort for not change position in list
      cleanArray.sort((a, b) => {
        return a.id - b.id || a.name.localeCompare(b.name)
      })

      // Sending tasks to the file
      fs.writeFileSync(filePath, JSON.stringify(cleanArray))
      response.send(cleanArray)
    }
  })
})

// Eliminar una tarea según el id
app.delete('/api/tasks/:id', (request, response) => {
  const id = +request.params.id

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const dataParsed = JSON.parse(data)
      const cleanArray = dataParsed.filter(task => task.id !== id)

      fs.writeFileSync(filePath, JSON.stringify(cleanArray))
      response.send(cleanArray)
    }
  })
})
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})
