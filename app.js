const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

//This route will be used as an endpoint to interact with our Graphql, 
//A ll our GraphQL queries will be routed through this route. 
app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(6000, () => {
    console.log('Listening on port 6000');
});