const Bootcamp = require('../models/Bootcamp');
const Teacher = require('../models/Teacher');

module.exports = class BootcampController{

    static async createBootcamp(req, res) {
        const bootcamp = {
            name: req.body.name,
            workload: req.body.workload,
            modality: req.body.modality,
            TeacherId: req.body.TeacherId
        }

        const teacher = await Teacher.findOne({where: {id: bootcamp.TeacherId}})

        if(!teacher){
            res.status(401).json({message: `bootcamp-invalido-professor-${bootcamp.TeacherId}-sem-registro`})
            return
        }

        await Bootcamp.create(bootcamp)
        res.status(202).json({message: `bootcamp-${bootcamp.name}-criado`})

    }

    static async showBootcamp(req, res) {
        const id = req.params.id
        const teacher = await Teacher.findOne({include: Bootcamp, where:{id:id}})

        if(!teacher){
            res.status(401).json({message: 'professor-parametro-inconsistente'})
            return 
        }

        res.status(201).json({teacher: teacher.get({plain: true})})
    }

    static async listUpdateBootcamp(req, res) {
        const id = req.params.id
        const bootcamp = await Bootcamp.findOne({where: {id:id}})
            
        if(!bootcamp){
            res.status(402).json({message: 'bootcamp-parametro-inconsistente'})
            return
        }

        res.status(200).json(bootcamp)
            
    }

    static async updateBootcamp(req,res){
        const id = req.body.id

        const bootcamp = {
            name: req.body.name,
            workload: req.body.workload,
            modality: req.body.modality
        }

        await Bootcamp.update(bootcamp, {where: {id:id}})

        res.status(200).json(bootcamp)
    }

    static async removeBootcamp(req,res) {
        const id = req.body.id

        await Bootcamp.destroy({where: {id:id}})
        res.status(200).json({message: `bootcamp-${id}-deletado`})
    }
}

