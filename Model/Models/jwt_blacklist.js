import { DataTypes } from "sequelize";
import sequelize from "../Database/connection.js";

const Jwt_blacklist = sequelize.define('jwt_blacklist', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    token: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
})

export default Jwt_blacklist