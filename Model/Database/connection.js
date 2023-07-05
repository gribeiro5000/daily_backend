import Sequelize from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize(
    'Daily', 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

try {
    await sequelize.authenticate()
    console.log('connected successful')
} catch (error) {
    console.error('Error', error)
}

export default sequelize