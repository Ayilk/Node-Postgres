import Task from '../models/Tasks';

export async function createTask(req, res){
   const {name, done, proyectid} = req.body;
   const newTask = await Task.create({
       name, done, proyectid
   }, {
       fields: ['name', 'done', 'proyectid']
   })
   res.json({message: 'Nueva tarea creada', data: newTask})
}

export async function getTasks(req, res){
    const tasks = await Task.findAll({
        attributes: ['id', 'proyectid', 'name', 'done'],
        order: [['id', 'DESC']]
    });
    res.json({tasks});
}

export async function updateTask(req, res){
    const { id } = req.params;
    const { proyectid, name, done } = req.body;

    const task = await Task.findOne({
        attributes: [ 'name', 'proyectid', 'name', 'done', 'id'],
        where: {
            id
        }
    })

    const updatedTask = await Task.update({
        name, done, proyectid},
        {where: {id}}
    );

    res.json( {message: "Tarea actualizada", updatedTask})
}

export async function deletTask(req, res){
    const { id } = req.params;
    await Task.destroy({
        where: { id }
    }) 
    res.json({message: "Tarea eliminada"})
}

export async function getOneTask(req, res){
    const {id} = req.params;
    const task = await Task.findOne({
        where: {id}
    });
    res.send(task);
}

export async function getTaskByProject(req, res){
    const {proyectid} = req.params;
    const tasks = await Task.findAll({
        attributes: ['id', 'proyectid', 'done', 'name'],
        where: {proyectid}
    });
    res.json({tasks})
}