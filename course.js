const express = require('express')
const mongoose = require('mongoose')
const app= express();
// Definir el esquema 
let courseSchema = new mongoose.Schema({
    //_id: ObjectId: Identificador unico  de tu documento 
    // Definir campos del esquema 4 
title:{
    type:String,
    required: true
},
description:{
    
        type:String ,
    
        minlength:20,
        maxlength:40,
    
        
},numberOfTopics:{ 

    type:Number,
    default: 0  ,
    min: 20,
    max: 40,
},
date: Date
})
courseSchema.virtual('info').get(function(){
return `${this.description}.Temas:${this.numberOfTopics}.fecha de lanzamiento: ${this.date}`
})


// esquemas y modelos 

// modelo 
mongoose.model('Course', courseSchema)

console.log('happy')
// validaciones built in 
