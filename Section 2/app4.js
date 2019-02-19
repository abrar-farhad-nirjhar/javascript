const num1 = 100;
const num2 = 50;

let val;

//simple math with numbers
val = num1 + num2;

val = num1 - num2;

val = num1 * num2;

val = num1 / num2;

val = num1 % num2;

//Math Object

val = Math.PI
val = Math.E
val = Math.round(5.5256468)


console.log(val)


//String operations

const firstname = "Abrar"
const lastname = "Farhad"


val = firstname+lastname

//Concatenation

val = firstname + ' '+lastname


//Appending
val = 'Abrar '
val+="Farhad"
let age = 23
val = "Hello, my name is "+firstname+" and I am "+age

//Escaping

val = " Abrar Farhad said \"I LOVE YOU BALQEES\""


//Length

val = val.length

//concat

val = firstname.concat(' ', lastname)

//Change case

val = firstname.toLowerCase()

val = firstname.toUpperCase()

val = firstname[0]

val = firstname.indexOf('r')

//charAt is simlar but used to filter by index


//slice

val = firstname.slice(0,5)


//split

val = firstname.split('')
//The instructor is kind of stupid i think

console.log("The instructor is kind of stupid i think")


console.log(val)