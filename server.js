const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

(async () => {
  const typeDefs = `#graphql
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => {
        return "Hello world";
      },
    },
  };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server);

  console.log(`Server running at ${url}`);
})();
