class DailyController {
    index(req, res) {
        res.json({"name": "Gabriel"})
    }
}

export default new DailyController