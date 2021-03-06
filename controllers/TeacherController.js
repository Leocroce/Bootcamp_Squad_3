const res = require('express/lib/response')
const Student = require('../models/Student')
const Bootcamp = require('../models/Bootcamp')
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

        if(!teacher){
            res.status(402).json({message: 'professor-parametros-null'})
            return
        }
        res.status(201).json({message: `professor-criado`})
    }

    static async showTeacher(req, res) {
        const teacher = await Teacher.findAll({ raw: true })

        if(!teacher) {
            res.status(402).json({ message: 'listar-professor-parametro-nulo'})
            return
        }

        res.status(200).json(teacher)
    }

    static async showTeacherRelations(req, res) {
        const teacher = await Teacher.findAll({ include: [ {model: Bootcamp, include: [Student] }] })

        if(!teacher) {
            res.status(402).json({ message: `listar-professor-parametro-nulo`})
            return
        }
    
        res.status(200).json(teacher)
    }

    static async listUpdateTeacher(req, res) {
        const id = req.params.id

        const teacher = await Teacher.findOne({ where: {id:id} })

        if(!teacher) {
            res.status(402).json({ message: 'parametro-teacher-inconsistente'})
            return
        }

        res.status(200).json(teacher)
    }

    static async sendUpdateTeacher(req, res) {
        const id = req.body.id

        if(!id) {
            res.status(402).json({message: 'id-parametro-nulo'})
            return
        }

        const teacherId = await Teacher.findOne({ where: {id:id} })

        if(!teacherId) {
            res.status(402).json({ message: 'id-parametro-inconsistente'})
        }

        const teacher = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            disciplines: req.body.disciplines
        }
        
        if(!teacher) {
            res.status(402).json({ message: 'teacher-parametros-null'})
            return
        }
        
        await Teacher.update(teacher, { where: {id:id} })

        res.status(200).json({ message: `teacher-${teacher.name}-atualizado`})
    }

    static async removeTeacher(req, res) {
        const id = req.body.id

        if(!id) {
            res.status(402).json({ message: 'teacher-id-parametros-inconsistentes'})
            return
        }

        const teacher = await Teacher.findOne({ where: {id:id} })

        if(!teacher) {
            res.status(402).json({ message: 'teacher-id-parametros-nulo'})
            return
        }

        await Teacher.destroy({ where: {id:id} })

        res.status(200).json({ message: `teacher-${id}-removido`})
    }
}