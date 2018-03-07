const express = require('express')
const graphqlHTTP = require('express-graphql')

const schema = require('./schema')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send({
        message: 'Hello MancJS!',
    })
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})
