class Vehicle {

    name; //string
    type; //string
    crew; //array


    constructor(name,type) {
        this.name = name;
        this.type = type;
        this.crew = [];
    }


    canGo(Employee) {

        if (this.crew.length != 0) {
        if(this.type == "plane" && Employee.title == "pilot") {
            console.log(`the ${this.type} can go`)
        }

        if(this.type == "bus" && Employee.title == "driver") {
            console.log(`the ${this.type} can go`)
        }

        if(this.type == "train" && Employee.title == "engineer") {
            console.log(`the ${this.type} can go`)
        }

        if(this.type == "boat" && Employee.title == "captain") {
            console.log(`the ${this.type} can go`)
        }

        } else {
            console.log(`${this.type} cant go`)
        } 
}

}


class Employee {

    name; //string 
    title; //string 

    constructor(name, title) {
        this.name = name;
        this.title = title; 
    }

    assign(Vehicle) {
        if(Vehicle.crew.length == 0) {
            if (Vehicle.type == "plane" && this.title == "pilot")
            Vehicle.crew.push(this.name)
        }

        if(Vehicle.crew.length == 0) {
            if (Vehicle.type == "bus" && this.title == "driver")
            Vehicle.crew.push(this.name)
        }

        if(Vehicle.crew.length == 0) {
            if (Vehicle.type == "train" && this.title == "engineer")
            Vehicle.crew.push(this.name)
        }

        if(Vehicle.crew.length == 0) {
            if (Vehicle.type == "boat" && this.title == "captain")
            Vehicle.crew.push(this.name)
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

console.log(v3.canGo(e1));
e3.assign(v3)
console.log(v1.canGo(e3));
console.log(v3.canGo(e3));
//e1.assign(v1);
//e2.assign(v1);

//console.log("After");
//console.log(v1);

//console.log(e1);

//console.log("After");

//console.log(v1);

//console.log(v1.canGo(e1));









