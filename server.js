const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { typeDefs } = require("./schema");

(async () => {
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
