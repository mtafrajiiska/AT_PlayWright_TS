//Object types with Type Aliases

type Role =  {
    role: "manager" | "founder"
}
type Permissions = {
    permissions: "admin" | "user"
}
type User = Role & Permissions;


const user: User = {
    role: "founder",
    permissions: "admin"
};

//console.log ("useObject", user);

// Object types with Interfaces

interface Animal {
    species: string;
    breed?: string;
    age: number;
    weight?: number;
    name: string;
}


const animal: Animal = {
    species: "dog",
    age: 5,
    name: "Tom",
    breed: "Frenchie",
    weight:3
}
//console.log ("animal", animal);


interface Cars {
     color: string;
     wheels: number;
     transmission: "manual" | "automatic";
     fuelType: "diesel" | "gasoline";
     startEngine: () => string;
} 


const car: Cars = {
    color: "white",
    wheels: 4,
    transmission: "manual",
    fuelType: "diesel",
    startEngine: function () {      // metod
        return 'Start the engine'
    },
}

//console.log("car", car.startEngine());

// get object keys
const keys = Object.keys(car);
console.log ("keys", keys);

// get object values
const values = Object.values(car);
console.log ("values", values);

// assign two objects in one
const colorObj = {color: 'black'}
const backgroundObj = {background: 'white'}

const assignedObj = Object.assign({}, colorObj, backgroundObj);
console.log("assignedObj", assignedObj);

export {};