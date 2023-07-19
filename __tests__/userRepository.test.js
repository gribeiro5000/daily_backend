import userRepository from "../Model/Repositories/userRepository.js"

jest.mock('../Model/Models/user.js')

describe('get tests', () => {
    it('getAll', async () => {
        const userTest = await userRepository.getAll()
        //console.log(userTest)
        expect(userTest.length).toBe(1)
    })
    it('getById', async () => {
        const userTest = await userRepository.getById(2)
        console.log(userTest)
        expect(userTest.name).toBe('nameTest')
    })
})

describe('create Tests', () => {
    it('create User', async () => {
        const result = await userRepository.insert({
            id: 1,
            name: "nameTest",
            lastName: "lasNameTest",
            birthday: "06/08/1998",
            country: "countryTest",
            city: "cityTest",
            username: "usernameTest",
            password: "passwordTest"
        })
        expect(result).toBe('User created successfully')
    })
})

describe('update tests', () => {
    it('update User', async () => {
        const result = await userRepository.update({
            id: 1,
            name: "jow",
            lastName: "carl",
            birthday: "06/07/2002",
            country: "brazil",
            city: "SP",
            username: "jowCARK",
            password: "123456"  
        }, 1)
        expect(result).toBe('user updated successfully')
    })
})

describe('delete tests', () => {
    it('delete User', async () => {
        const result = await userRepository.delete(1)
        expect(result).toBe('User deleted successfully')
    })
})