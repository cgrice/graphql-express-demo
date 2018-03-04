import express from 'express'
import graphqlHTTP from 'express-graphql'

import schema from './schema'

const app = express()

app.get('/health', (req, res) => {
    res.send({
      message: 'I am a server route and can also be hot reloaded!'
    })
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

export default app
