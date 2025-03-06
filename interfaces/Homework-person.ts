//
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
}

interface personInfo extends Person {
    country?: string;
    greeting?: () => string;
}

const person1: Person = {
    firstName: "Mickey",
    lastName: "Mouse",
    age: 100,
    email: "Mickey@disneyland.com",
    phoneNumber: 55555555,
}

const person2: personInfo = {
    firstName: "Minnie",
    lastName: "Mouse",
    age: 100,
    email: "Minnie@disneyland.com",
    phoneNumber: 55555555,
    country: "USA",
    greeting: function () {
        return "Hello!";
    },
};