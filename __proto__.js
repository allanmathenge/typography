// Prototypal inheritance and prototypal chain
// ES6 introduced classes which is a mordern way to construct objects

// Object Inheritance

const person = {
    alive: true
}

const musician = {
    plays: true
}

musician.__proto__= person;

// JavaScript now has getPrototypeOf and setPrototypeOf methods of using __proto__
Object.setPrototypeOf(musician, person);
console.log(musician.alive);
console.log(Object.getPrototypeOf(musician));
console.log(musician.__proto__);
console.log(Object.getPrototypeOf(musician) === musician.__proto__);

const guitarist = {
    strings: 6,
    __proto__: musician
}

console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.strings);

// No circular references allowed (person.__proto__ can't be guitarist)
// The __proto__ value must be an object or null;
// An object can only directly inherit from another object.

const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
        this.tyres = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar);
console.log(luxuryCar.doors);
console.log(car);

// Walking up the chain -- props and methods are not copied
console.log(luxuryCar.valueOf()); // valueOf() is inherited from the default obj

// Getting keys of an object
console.log(Object.keys(luxuryCar));
Object.keys(luxuryCar).forEach((key) => console.log(key));

// But for..in loop includes inherited properties
for (let key in luxuryCar) {
    console.log(key);
}


//OBJECT CONSTRUCTORS

function Animal(species) {
    this.species = species;
    this.eats = true; 
}
Animal.prototype.walks = function() {
return `A ${this.species} is walking`;
}
const Bear = new Animal("bear");
console.log(Bear.species);
console.log(Bear.walks());

// the prototype property is where inheritable properties and methods are

console.log(Bear.__proto__);
console.log(Bear.__proto__ === Animal.prototype);
