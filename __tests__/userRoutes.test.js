import axios from "axios"
import httpStatusCodes from "../Error_handler/httpStatusCodes.js"

const url = "http://localhost:3000"

describe('get tests', () => {
    it('should return status code 200', async () => {
        const res = await axios.get(`${url}/user`)
        expect(res.status).toBe(httpStatusCodes.OK)
    })
    it("should return status code 200 and name's user Gabriel", async () => {
        const res = await axios.get(`${url}/user/1`)
        expect(res.status).toBe(httpStatusCodes.OK)
        expect(res.data.name).toBe('Gabriel')
    })
    it("should return status code 400", async () => {
        const res = await axios.get(`${url}/user/0`).then(response => {
            console.log(response)
        }).catch(err => {
            return err.response
        })
        expect(res.status).toBe(httpStatusCodes.BAD_REQUEST)
    })
})

describe('post Tests', () => {
    it("should return status code 201", async () => {
        const res = await axios.post(`${url}/user`, {
            name: "nameTest",
            lastName: "lasNameTest",
            birthday: "06/08/1998",
            country: "countryTest",
            city: "cityTest",
            username: "usernameTest",
            password: "passwordTest"
        })
        expect(res.status).toBe(httpStatusCodes.CREATED)
        await axios.delete(`${url}/user/${res.data.id}`)
    })

    it("should return status code 400", async () => {
        const res = await axios.post(`${url}/user`, {
            lastName: "lasNameTest",
            birthday: "06/08/1998",
            country: "countryTest",
            city: "cityTest",
            username: "usernameTest",
            password: "passwordTest"
        }).then(response => {
            console.log(response)
        }).catch(err => {
            return err.response
        })
        expect(res.status).toBe(httpStatusCodes.BAD_REQUEST)
    })
})

describe('update tests', () => {
    it('should return status code 200', async () => {
        const user = await axios.post(`${url}/user`, {
            name: "nameTest",
            lastName: "lasNameTest",
            birthday: "06/08/1998",
            country: "countryTest",
            city: "cityTest",
            username: "usernameTest",
            password: "passwordTest"
        })
        const res = await axios.put(`${url}/user/${user.data.id}`, {
            name: "nameTestPUT"
        })
        expect(res.status).toBe(httpStatusCodes.OK)
        await axios.delete(`${url}/user/${user.data.id}`)
    })
})

describe('delete tests', () => {
    it.only('should return status code 200', async () => {
        const user = await axios.post(`${url}/user`, {
            name: "nameTest",
            lastName: "lasNameTest",
            birthday: "06/08/1998",
            country: "countryTest",
            city: "cityTest",
            username: "usernameTest",
            password: "passwordTest"
        })
        const res = await axios.delete(`${url}/user/${user.data.id}`)
        expect(res.status).toBe(httpStatusCodes.OK)
    })
})