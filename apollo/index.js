const { ApolloServer, gql } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String): User
  }

  type User {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    users: async (parent, args, { prisma }) => prisma.user.findMany()
  },
  Mutation: {
    createUser: async (parent, { name }, { prisma }) => {
      return prisma.user.create({
        data: {
          name
        }
      })
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma: new PrismaClient()
  },
  playground: true,
  introspection: true
})

server.listen().then(({ url }) => {
  console.log(`Apollo is running at ${url}`)
})