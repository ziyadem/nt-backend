const { getUsers, createUser, getUser, deleteUser, updateUser } = require("./model")
module.exports = {
    Query: {
        users: async () => await getUsers()
    },
    Mutation: {
        getUser: async (_, args)    => await getUser(args),
        createUser: async (_, data) => await createUser(data),
        deleteUser: async (_, args) => await deleteUser(args),
        updateUser: async (_, args) => await updateUser(args)
    }
}