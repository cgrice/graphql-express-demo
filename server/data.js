const data = {
    meetups: [
        {
            id: 1,
            name: 'MancJS',
            organiser: 1,
        },
        {
            id: 2,
            name: 'McrFRED',
            organiser: 5,
        }
    ],
    events: [
        {
            id: 1,
            name: 'MancJS March 2018',
            meetup: 1,
            date: '2018-03-07',
            attendees: [
                1, 4, 3
            ]
        },
        {
            id: 2,
            name: 'MancJS April 2018',
            meetup: 1,
            date: '2018-04-07',
            attendees: [
                1, 3, 5
            ]
        },
        {
            id: 3,
            name: 'MancJS May 2018',
            meetup: 1,
            date: '2018-05-07',
            attendees: [
                1, 2, 4, 3, 5
            ]
        },
        {
            id: 4,
            name: 'McrFRED March 2018',
            meetup: 2,
            date: '2018-03-12',
            attendees: [
                5, 1, 4
            ]
        },
        {
            id: 5,
            name: 'McrFRED April 2018',
            meetup: 2,
            date: '2018-04-12',
            attendees: [
                5, 1, 2, 3
            ]
        },
        {
            id: 6,
            name: 'McrFRED May 2018',
            meetup: 2,
            date: '2018-05-12',
            attendees: [
                5, 3, 2
            ]
        },
    ],
    people: [
        {
            id: 1,
            name: 'Tyrion',
            image: 'https://api.adorable.io/avatars/285/tyrion@meetup.png'
        },
        {
            id: 2,
            name: 'Ned',
            image: 'https://api.adorable.io/avatars/285/ned@meetup.png'
        },
        {
            id: 3,
            name: 'Cersei',
            image: 'https://api.adorable.io/avatars/285/cersei@meetup.png'
        },
        {
            id: 4,
            name: 'Thoros',
            image: 'https://api.adorable.io/avatars/285/thoros@meetup.png'
        },
        {
            id: 5,
            name: 'Walder',
            image: 'https://api.adorable.io/avatars/285/walder@meetup.png'
        }
    ]
}


const findEvent = (id) => (
    data.events.find((event) => event.id === id)
)

const findMeetup = (id) => (
    data.meetups.find((event) => event.id === id)
)

const findPerson = (id) => (
    data.people.find((event) => event.id === id)
)

const findEventsForMeetup = (id) => (
    data.events.filter((event) => event.meetup === id)
)

export {
    findMeetup,
    findPerson,
    findEvent,
    findEventsForMeetup,
}

export default data
