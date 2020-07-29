const express = require('express')
const mongoose = require('mongoose')
const app= express();
// integrar el esquema de course 
require('./course')

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect('mongodb://localhost/mongoose-course',()=>{
    console.log("me conecte a la base de datos")
})

app.get('/', (req,res)=>{
    res.send('Hola Mundo ')
})

app.post('/cursos', (req, res) =>{
    const Course = mongoose.model('Course')
    Course.create({
        title:'Curso de Mongoose',
        description: 'Tres'
    }).then(doc=> {
        res.json(doc)
    }).catch(err =>  {

    })
})


app.listen(8000,()=>console.log('Server Started'))


// esquemas y modelos 

