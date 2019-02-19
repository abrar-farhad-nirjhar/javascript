// const person = {
//     name: 'Abrar',
//     age: 23
// }

// console.log(person)



// Person constructor


function Person(name,age,dob){
    this.name = name;
    this.age = age
    // this.changeName = this.changeName.bind(this)
    // console.log(this)
    this.birthday = new Date(dob)
    this.getAge = function(){
        const diff = Date.now()-this.birthday.getTime()
        const ageDate = new Date(diff)
        return ageDate.getUTCFullYear() - 1970
    }
}







const abrar = new Person("abrar", 23, "19-3-1995")
console.log(abrar.getAge())
