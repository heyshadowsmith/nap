const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    users: [User]
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      return [
        {
          name: "Shadow"
        },
        {
          name: "Isaac"
        }
      ]
      
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})

server.listen().then(({ url }) => {
  console.log(`Apollo is running at ${url}`)
})