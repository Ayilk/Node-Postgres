import Project from '../models/Project';


export async function getProjects(req, res){
    const projects = await Project.findAll();
    res.json({ data: projects})
}

export async function getProjectsId( req, res){
    const { id } = req.params;
    try {
        const projectId = await Project.findOne({
            where: {
                id: id
            }
        })
        res.json(projectId)
    } catch (error) {
        console.log(error);
        res.send("Algo salio mal")
    }
}

export async function createProject(req, res){
    const {name, priority, description, deliverydate} = req.body;
    try {
        let newProject= await Project.create({
            name, priority, description, deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if(newProject){
             return res.json({ message: "Projecto creado exitosamente", data: newProject})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Algo salió mal"})
    }
   
}

export async function deleteProject(req, res){
    const { id } = req.params;
    const projectDelet = await Project.destroy({
        where: {
            id: id
        }
    })
    res.json({message: "Projecto eliminado exitosamente", count: projectDelet})
}

export async function updateProject(req, res){
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    const projectUpdated = await Project.findAll({
        attributes: ['id','name', 'description', 'deliverydate'],
        where: {
            id: id
        }
    });

    if(projectUpdated.length >0 ){
        projectUpdated.forEach(async el => {
            await el.update({
                name, priority, description, deliverydate
            })
        })
    }

    return res.json({
        message: "Projecto actualizado exitosamente",
        data: projectUpdated
    })
}
