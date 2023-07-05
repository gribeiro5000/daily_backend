import Sequelize from "sequelize";

const sequelize = new Sequelize('Daily', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate()
    console.log('connected successful')
} catch (error) {
    console.error('Error', error)
}

export default sequelize