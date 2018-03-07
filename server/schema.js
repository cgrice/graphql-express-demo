const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools')

const data = require('./data')

const { findPerson, findEventsForMeetup } = data

const typeDefs = importSchema('schema.graphql')
const resolvers = {
    Query: {
        meetups: () => data.meetups,
    },
    Meetup: {
        events: meetup => findEventsForMeetup(meetup.id),
        organiser: meetup => findPerson(meetup.organiser),
    },
    Event: {
        attendees: event => event.attendees.map(id => findPerson(id)),
    },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
