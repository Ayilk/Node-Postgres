import Sequelize from 'sequelize';
import { sequelieze } from '../db/db';  

const Task = sequelieze.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    proyectid: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
})

export default Task;