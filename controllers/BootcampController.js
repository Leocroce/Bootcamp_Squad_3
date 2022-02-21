const Bootcamp = require('../models/Bootcamp');

module.exports = class BootcampController{

    static async createBootcamp(req, res){
        const bootcamp = {
            name: req.body.name,
            workload: req.body.worload,
            modality: req.body.modality
        }

        await Bootcamp.create(bootcamp)

        if(!bootcamp){
            res.status(402).json({message: 'bootcamp-parametros-null'})
            return;
        }
        res.status(201).json({message: `bootcamp-criado`})

    }

    static async updateBootcamp(req,res){
        const id = req.body.id

        const bootcamp = {
            name: req.body.name,
            workload: req.body.worload,
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

