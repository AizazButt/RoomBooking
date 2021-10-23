const reader = require("readline-sync"); //npm install readline-sync

// let a = parseInt(reader.question("Enter First Value: "))
// let b = parseInt(reader.question("Enter Second Value: "))

let roomsMeta = [
    {
        number: 1,
        booked: false,
    },
    {
        number: 2,
        booked: false,
    },
    {
        number: 3,
        booked: false,
    },
    {
        number: 4,
        booked: false,
    },
    {
        number: 5,
        booked: false,
    },
    {
        number: 6,
        booked: false,
    }
];

function dashboardScreen() {
    while (true) {
        console.log("1. Show Booked Rooms")
        console.log("2. Show Available Rooms")
        console.log("0. Exit")

        const selection = parseInt(reader.question("Enter Value: "));
        if (selection === 0) {
            console.log("Thanks For using !")
            break;
        } else if (selection === 1) {
            showBookedRoomsScreen()
        } else if (selection === 2) {
            showAvailableRooms()
        }
    }
}

function showBookedRoomsScreen() {
    while (true) {
        const bookedRooms = roomsMeta.filter(room => room.booked)
        if (bookedRooms.length === 0) {
            console.log("No Booked Rooms Yet!")
            break;
        }
        bookedRooms.forEach(room => {
            console.log(`Room ${room.number} is Booked.`)
        })
        break
    }
}

function showAvailableRooms() {
    while (true) {
        const availableRooms = roomsMeta.filter(room => !room.booked)
        if (availableRooms.length === 0) {
            console.log("No Rooms Available!")
            break;
        }
        availableRooms.forEach(room => {
            console.log(`Room ${room.number} is Available.`)
        })
        const roomToBook = parseInt(reader.question("Enter Room Number To Book: "));
        const room = roomsMeta.filter(room => room.number === roomToBook); // Array []
        if (room.length === 0) {
            console.log("Please Enter a valid value!")
            continue
        }
        let newRooms = roomsMeta.filter(room => room.number !== roomToBook)
        room[0] = {
            ...room[0],
            booked: true
        }
        roomsMeta = [
            ...newRooms,
            room[0]
        ]
        console.log(`Room ${room[0].number} has been Booked!`)
        break
    }
}

dashboardScreen()