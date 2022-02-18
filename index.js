require("dotenv/config");
const express = require('express')
const app = express()
const conn = require('./db/conn')

//const Student = require('./models/Student')
const Teacher = require('./models/Teacher')
//const Bootcamp = require('./models/Bootcamp')

//const studentRoutes = require('./routes/studentRoutes')
const teacherRoutes = require("./routes/teacherRoutes")
//const bootcampRoutes = require('./routes/bootcampRoutes')

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//app.use('/students', studentRoutes)
app.use('/teachers', teacherRoutes)
//app.use('/bootcamps', bootcampRoutes)

conn
//.sync()
.sync({ force: true })
.then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))