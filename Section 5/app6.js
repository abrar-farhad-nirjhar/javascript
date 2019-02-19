class Person{

    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname = lastname
        this.age = age

        // this.getFullname = this.getFullname.bind(this)
    }

    getFullname(){
        return `${this.lastname} ${this.firstname}`
    }
    getsMarried(newlastname){
        this.lastname = newlastname
    }
}

const abrar = new Person("Abrar", "Farhad", 23)

console.log(abrar)
console.log(abrar.getFullname())