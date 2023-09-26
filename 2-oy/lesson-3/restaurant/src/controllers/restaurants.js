const {read, write} = require("../utils/fs")

const GET_RESTAURANTS = (req, res) => {
    try {
        const allData = read("restaurants")

        res.json(allData)
    } catch (err) {
        if(err) throw err
    }
}

module.exports = {
    GET_RESTAURANTS
}