const Teacher = require('../models/Teacher')
module.exports = class TeacherController{

    static async createTeacher(req, res){
        const teacher = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            disciplines: req.body.disciplines            
        }

        await Teacher.create(teacher)

        if(!Teacher){
            res.status(402).json({message: 'professor-parametros-null'})
            return
        }
        res.status(201).json({message: `professor-criado`})
    }
}