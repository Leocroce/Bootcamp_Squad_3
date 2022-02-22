require("dotenv/config");
const express = require('express')
const app = express()
const conn = require('./db/conn')

const Teacher = require('./models/Teacher')
const Bootcamp = require('./models/Bootcamp')
const Student = require('./models/Student')

const teacherRoutes = require("./routes/teacherRoutes")
const bootcampRoutes = require('./routes/bootcampRoutes')
const studentRoutes = require('./routes/studentRoutes')

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use('/teachers', teacherRoutes)
app.use('/bootcamps', bootcampRoutes)
app.use('/students', studentRoutes)

conn
.sync()
// .sync({ force: true })
.then(() => {
    app.listen(process.env.PORT || 3000)
}).catch((err) => console.log(err))

