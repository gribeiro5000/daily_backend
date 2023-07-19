import SequelizeMock from "sequelize-mock"

const dbMock = new SequelizeMock()

const UserMock = dbMock.define("User", {
    id: 1,
    name: "nameTest",
    lastName: "lasNameTest",
    birthday: "06/08/1998",
    country: "countryTest",
    city: "cityTest",
    username: "usernameTest",
    password: "passwordTest"  
})

export default UserMock