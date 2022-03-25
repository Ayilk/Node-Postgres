import Sequelize from 'sequelize';
import { sequelieze } from '../db/db';

import Task from './Tasks';

const Project = sequelieze.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.INTEGER
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    },
},{
    timestamps: false
})

Project.hasMany(Task, {foreignKey: 'proyectid', sourceKey: 'id'});
Task.belongsTo(Project, { foreignKey: 'proyectid', sourceKey: 'id'});

export default Project;