import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import data, {
    findPerson,
    findEventsForMeetup,
} from './data'

const typeDefs = importSchema('schema.graphql')
const resolvers = {
    Query: {
        meetups: () => data.meetups,
    },
    Meetup: {
        events: (meetup) => findEventsForMeetup(meetup.id),
        organiser: (meetup) => findPerson(meetup.organiser)
    },
    Event: {
        attendees: (event) => event.attendees.map(
            (id) => findPerson(id)
        ),
        attendeeCount: (event) => event.attendees.length,
        free: () => true,
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
