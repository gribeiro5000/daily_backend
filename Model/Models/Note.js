import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";
import User from "./User.js";

const Note = sequelize.define('Note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    annotation: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    day: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

Note.belongsTo(User)

export default Note