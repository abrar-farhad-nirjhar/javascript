const person = {
    firstname:"Abrar",
    lastname:"Farhad",
    age:23,
    email:"abrar.farhad.af@gmail.com",
    address: {
        city:"Dhaka",
        postalcode:"1217",
        are:"Niketan"
    },

    getfullname: function(){
        return this.firstname+" "+this.lastname
    },

    getBirthYear: function(){
        return 2019-this.age
    }
}


let val

val = person

val = person.fistname


val = person['fistname']

val = person.address.city

val = person.getfullname()
val = person.getBirthYear()


// We can also have an array of objects
console.log(val)