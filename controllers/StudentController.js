const Student = require('../models/Student')
const Bootcamp = require('../models/Bootcamp')
const { Op } = require('sequelize');

module.exports = class StudentController{
    //CREATE
    static async createStudent(req, res) {
        const student = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            grade: req.body.grade,
            BootcampId: req.body.BootcampId
        }

        const bootcamp = await Bootcamp.findOne({where: {id: student.BootcampId}})

        if(!bootcamp){
            res.status(401).json({message: `aluno-inválido-bootcamp-${student.BootcampId}-sem-registro`})
        }

        await Student.create(student)

        res.status(201).json({message: `aluno-${student.name}-criado`})
    }
    //READ
    static async showAllStudents(req, res) {
        const student = await Student.findAll({raw:true})  

        if(!student){
            res.status(401).json({message: 'lista-alunos-nula'})
            return
        }

        res.status(200).json({student: student.get({plain: true})})
    }

    static async showStudents(req, res) {
        const id = req.params.id

        const bootcamp = await Bootcamp.findOne({where:{id:id}, include: Student})

        if(!bootcamp){
            res.status(401).json({message: 'alunos-inválidos-bootcamp'})
            return
        }

        res.status(200).json({bootcamp: bootcamp.get({plain: true})})
    }

    static async showGoodStudents(req, res) {
        const id = req.params.id
        
        const bootcamp = await Bootcamp.findOne({where:{id:id}, include: [{model: Student, where:{grade:{[Op.gte]:7}}}]})

        if(!bootcamp){
            res.status(401).json({message: 'alunos-inválidos-bootcamp'})
            return
        }

        res.status(200).json({bootcamp: bootcamp.get({plain: true})})
    }

    static async showBadStudents(req, res) {
        const id = req.params.id
        
        const bootcamp = await Bootcamp.findOne({where:{id:id}, include: [{model: Student, where:{grade:{[Op.lt]:7}}}]})

        if(!bootcamp){
            res.status(401).json({message: 'alunos-inválidos-bootcamp'})
            return
        }

        res.status(200).json({bootcamp: bootcamp.get({plain: true})})
    }

    static async showUpdateStudent(req, res){
        const id = req.params.id

        const student = await Student.findOne({where: {id:id}})

        if(!student){
            res.status(402).json({message: 'aluno-parâmetro-nulo'})
            return
        }

        res.status(200).json(task)
    }
    //UPDATE
    static async updateStudent(req, res){
        const id = req.body.id

        const student = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            grade: req.body.grade,
            BootcampId: req.body.UserId
        }

        const bootcamp = await Bootcamp.findOne({where: {id: student.BootcampId}})

        if(!bootcamp){
            res.status(401).json({message: `aluno-inválido-bootcamp-${student.BootcampId}-sem-registro`})
        }

        await Student.update(student, {where: {id:id}})
        
        res.status(200).json(student)
    }
    //DELETE
    static async deleteStudent(req, res) {
        const id = req.body.id

        if(!id){
            res.status(401).json({message: `aluno-parâmetro-nulo`})
            return
        }

        const student = await Student.findOne({where: {id:id}})

        if(!student){
            res.status(402).json({message: `aluno-inexistente-${id}-banco`})
            return
        }

        await Student.destroy({where: {id:id}})
        res.status(200).json({message: `aluno-${id}-removido-banco`})
    }
}

