`use strict`

// OBJECTS, ARRAYS and JSON

// OBJECTS
// collection of data in any order
// made up of KEY : VALUE pairs

// lets create an object

let animal = new Object();
animal[`name`] = `Clifford`;
animal[`type`] = `Dog`;
animal[`size`] = `Big`;

console.log(animal);
console.log(animal.size);

// can also EXPAND objects with new properties
// whenever you like

animal.colour = `Red`;
console.log(animal.colour);

// LITERAL notation
// quicker and easier

let vehicle = {
    "type" : `bike`,
    "seats": 1,
    "wheels" : 2
}

console.log(vehicle);

// ARRAYS

// OBJECTS can be stored in an ARRAY
// arrays can also be created with a LITERAL notation

let garage = [
    vehicle,
    {"type" : `car`, "seats" : 5, "wheels": 4}
]

console.log(garage);

// let us LOOP through an ARRAY

let x = [1,2,3,4,5];

// the standard loop

for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// you can also us an ENHANCED for loop

for (let placeholder of x) {
    console.log(placeholder);
}

// ARRAY OBJECT METHODS

// reverse
console.log(x.reverse());

// join
console.log(x.join(`|`));

// JSON
// JavaScript Object Notation
// you can use this in JavaScript with no issues

let newJSON = {
    "name" : "Cameron",
    "age" : 28
}

// to convert JSON to different DATA TYPES

// JSON to STRING
let str = JSON.stringify(newJSON);
console.log(str);

// STRING to JSON
let my = JSON.parse(str);
console.log(my);
console.log(my.name);