const {  getCars, getCar } = require("./model")
module.exports = {
    Query: {
        cars: async () => await getCars()
    },
    Mutation: {
        getCar: async (_, args, req) => await getCar(_, args)
    }
}