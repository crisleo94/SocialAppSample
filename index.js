const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const { MONGODB, PORT } = require('./config')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => ({req})
})

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Server listening in port: ${PORT}`)
    return server.listen(PORT)
  })
