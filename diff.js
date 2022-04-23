

/**
 * this is a new class for Vehicle
 */


 class Vehicle {

    name; //string
    type; //string
    crew; //array


    /**
     * 
     * @param {String} name 
     * @param {String} type
     * @param {Array} crew 
     */
    constructor(name,type) {
        this.name = name;
        this.type = type;
        this.crew = [];
    }

    /**
     * this method checks if the vehicle is eligible to go or not. The vehicle should be asigned a crew and it should be the right crew based on the vehicle type
     * @param {Employee} employee 
     */
    canGo(employee) {

        if (this.crew.length != 0) {
        if(this.type == "plane" && employee.title == "pilot") {
            console.log(`the ${this.type} can go`)
        }

        if(this.type == "bus" && employee.title == "driver") {
            console.log(`the ${this.type} can go`)
        }

        if(this.type == "train" && employee.title == "engineer") {
            console.log(`the ${this.type} can go`)
        }

        if(this.type == "boat" && employee.title == "captain") {
            console.log(`the ${this.type} can go`)
        }

        } else {
            console.log(`${this.type} cannot go because it does not have a crew or the right crew assigned`)
        } 
}

}

/**
 * this is a new class for Employee
 */

class Employee {

    name; //string 
    title; //string 

    constructor(name, title) {
        this.name = name;
        this.title = title; 
    }

    /**
     * this method assigns the crew to the vehicle. The crew title should match the vehicle type for it to be assinged properly
     * @param {Vehicle} vehicle 
     */
    assign(vehicle) {
        if(vehicle.crew.length == 0) {
            if (vehicle.type == "plane" && this.title == "pilot")
            vehicle.crew.push(this.name)
        }

        if(vehicle.crew.length == 0) {
            if (vehicle.type == "bus" && this.title == "driver")
            vehicle.crew.push(this.name)
        }

        if(vehicle.crew.length == 0) {
            if (vehicle.type == "train" && this.title == "engineer")
            vehicle.crew.push(this.name)
        }

        if(vehicle.crew.length == 0) {
            if (vehicle.type == "boat" && this.title == "captain")
            vehicle.crew.push(this.name)
        }

}

}

let v1 = new Vehicle("max","plane");

console.log(v1);


let e1 = new Employee("James","pilot");
let e2 = new Employee("Justin","pilot");


let e3 = new Employee("Jany","driver");
let v3 = new Vehicle("max1","bus");

console.log(e1);

//console.log(v1.canGo(e1));

//console.log(v3.canGo(e1));
e1.assign(v3)
console.log(v3.canGo(e3));
console.log(v3.canGo(e1));
e3.assign(v3)
console.log(v3.canGo(e3));
//e1.assign(v1);
//e2.assign(v1);

//console.log("After");
//console.log(v1);

//console.log(e1);

//console.log("After");

//console.log(v1);

//console.log(v1.canGo(e1));









