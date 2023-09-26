const express = require("express")

const app = express()
const PORT = 5000

const { ApolloServer } = require("apollo-server-express")
const modules = require("./modules")


app.get("/", (req, res) => {
    return res.send("OK")
})



const startApolloServer = async() => {
    const server = new ApolloServer({ modules })

    await server.start()

    server.applyMiddleware({ app, path: "/graphql"})
    console.log(`Apollo server is running at http://localhost:${PORT}${server.graphqlPath}`);

}

startApolloServer()


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})