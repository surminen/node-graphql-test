const { GraphQLServer } = require('graphql-yoga')
const { v1 } = require('neo4j-driver')
const driver = v1.driver(
    'bolt://localhost:7687',
    v1.auth.basic('foo', 'bar')
);

const typeDefs = `
type Movie {
    title: String
    year: Int
    imdbRating: Float
    genres: [Genre] @relation(name: "IN_GENRE", direction: "OUT")
}
type Genre {
    name: String
    movies: [Movie] @relation(name: "IN_GENRE", direction: "IN")
}
`;

const { makeAugmentedSchema } = require('neo4j-graphql-js')

const schema = makeAugmentedSchema({ typeDefs });

// const resolvers = {
//     Query: {
//         info: () => `This is the API of a Hackernews Clone`,
//         feed: () => links,
//     },
//     Link: {
//         id: (parent) => parent.id,
//         description: (parent) => parent.description,
//         url: (parent) => parent.url,
//     },
//     Mutation: {
//         post: (parent, args) => {
//             const link = {
//                 id: `link-${idCount++}`,
//                 description: args.description,
//                 url: args.url,
//             }
//             links.push(link)
//             return link
//         }
//     },
// }

const server = new GraphQLServer({
    // resolvers,
    schema,
    context: { driver },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))