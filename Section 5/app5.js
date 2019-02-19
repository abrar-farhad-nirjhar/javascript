const personPrototypes = {
    greeting: function (){
        return `Hello there ${this.firstname} ${this.lastname}`
    },
    getsMarried: function(newlastname){
        this.lastname = newlastname
    }
}

const mary = Object.create(personPrototypes);
mary.firstname = "Abrar"
mary.lastname = "Farhad"
mary.age = 23
mary.getsMarried("Nirjhar")
console.log(mary.greeting())

const brad = Object.create(personPrototypes, {
    firstname: {value:"Rozana"},
    lastname:{value:"Tabassum"},
    age:{value:36}
})

console.log(brad)

console.log(brad.greeting())