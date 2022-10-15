//  =+=+=+=+=+=+=+=+=+=+=++      Quest Number 1     =+=+=+=+=+=+=+=+=+=+=+=+=+=

//    *************Create a class called PersonAccount. It has firstname, lastname, incomes, expenses 
//    properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense 
//    and accountBalance methods. Incomes is an array of objects income and its description 
//    and expenses is also an array of objects having expense and its description.
//    **********

class PersonAccount {
    constructor(firstName, lastName, incomes, expenses) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }
    get totalIncome() {
        return this.incomes.reduce((previousVal, currentVal) => previousVal + currentVal.amount, 0)
    }   
    get totalExpense() {
        return this.expenses.reduce((previousVal, currentVal) => previousVal + currentVal.amount, 0)
    }
    get accountBalance() {
        return this.totalIncome - this.totalExpense
    }
    addIncome(amount, description) {
        this.incomes.push({ amount,description})
    }
    addExpense(amount, description) {
        this.expenses.push({ amount,description})
    }
}

const myAcc = new PersonAccount("Saim", "Ali", [], []);

myAcc.addIncome(20000, "Freelancing");
myAcc.addExpense(5000, "StreetFood");
console.log(myAcc)
console.log(myAcc.totalIncome);
console.log(myAcc.totalExpense);
console.log(myAcc.accountBalance);







//    =+=+=+=+=+=+=+=+=+=+=+      Quest Number 2     =+=+=+=+=+=+=+=+=+=+=+=+=+=
// *************** Create an Automobile class. The class will have name, model, color, type properties and
// create different methods e.g openOrCloseDoor() logs doors are opened or closed, start()
// logs car is ready for drive.************************


class Automobile {
    constructor(type, name, model, color, maxSpeed) {
        this.type = type;
        this.name = name;
        this.model = model;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }

        openOrCloseDoor() {
            let count = Math.floor((Math.random() * 10))
            if (count >= 5) {
                console.log("Doors are closed !");
                start(this.type);
            }
            else {
                console.log("Doors are opened !");
            }
            function start(type) {
                console.log(`${type} is ready for drive`);
            }
        }

}
let car = new Automobile('car', 'Fx', '2013', 'Black', '240km/hr');








//    =+=+=+=+=+=+=+=+=+=+=++      Quest Number 3     =+=+=+=+=+=+=+=+=+=+=+=+=+=
//    ****************Create Car, Bus and Truck child class from the Automobile Class.**********

let bus  = new Automobile('Bus', 'Coaster', '2009', 'White', '130km/hr');
let truck = new Automobile('truck', 'tanker', '1998', 'Blue', '90km/hr');
car.openOrCloseDoor()
bus.openOrCloseDoor()
truck.openOrCloseDoor()