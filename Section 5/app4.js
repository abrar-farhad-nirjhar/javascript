//Person constructor


function Person(firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
}

Person.prototype.greeting = function(){
    return `Hello there ${this.firstname} ${this.lastname}`
}

const abrar = new Person("Abrar", "Farhad")
const balqees = new Person("Balqees", "Mohammed")


console.log(abrar.greeting())


function Customer(firstname, lastname, phone, membership){
    Person.call(this, firstname, lastname);
    this.phone = phone
    this.membership = membership
}
// Inheretic the person prototype methods
Customer.prototype = Object.create(Person.prototype)

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer
Customer.prototype.greeting = function(){
    return `Hello there valued ${this.membership} customer`
}
const c1 = new Customer("Hakuna", "Matata", "01686826756", "Standard")

console.log(c1.greeting())