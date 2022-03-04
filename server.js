const path = require('path')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
// const { graphqlHTTP } = require('express-graphql'); we uninstalled this for Apollo setup instead 
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql')); 

const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))


function startApolloServer() {
    const app = express(); 

    //combines all schemas into the one array here with order of types not mattering, see joining all files in above 
    //these schemas talk directy to the models for data and resolved here as these arrays 
    const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
})
    //our schemas above defines how this server responds 
    const server = new ApolloServer({
        schema
    })
    await server.start(); 
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(3000, () => {
        console.log('running graphQL server...')
    }); 
    
}


//add the middleware for graphql to mix with express
//expose endpoint to it 
//means that any query that asks for the schema qill resolve to the root values passed in as root object 
// app.use('/graphql', graphqlHTTP({
//     schema: schema, 
//     graphiql: true
// }));


startApolloServer(); 