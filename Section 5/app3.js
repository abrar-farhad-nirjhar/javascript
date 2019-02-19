function Person(firstname, lastname, age){
    this.firstname = firstname;
    this.lastname = lastname
    this.age = age
    
    
}

//Get age

Person.prototype.getAge = function (){
    return this.age
}
Person.prototype.fullName = function(){
    return this.firstname+" "+this.lastname
}

// Gets Married

Person.prototype.getsMarried = function(newLastname){
    this.lastname += " "+newLastname
}


const abrar = new Person("Abrar", "Farhad", 23)
const balqees = new Person("Balqees", "Mohammed", 24)


console.log(abrar.getAge())
console.log(balqees.fullName())
balqees.getsMarried("Farhad")
console.log(balqees.fullName())

