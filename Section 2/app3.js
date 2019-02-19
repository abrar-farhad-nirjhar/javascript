//Type Conversion

//Number to String

let val;

val = 23

console.log(val, typeof val)

val = String(val)

console.log(val, typeof val, val.length)

//String to number

val = Number(val)

console.log(val, typeof val)

//Using booleans

val = true

val = String(val)

console.log(val, typeof val)

val = true

val = Number(val)
console.log(val, typeof val)
val = false
val = Number(val)
console.log(val, typeof val)

//array to string

val = ['a', 'b', 'c', 'd', 'e']

console.log(val, typeof val)

val = String(val)
console.log(val, typeof val)


//String to integer

val = "25"

console.log(val, typeof val)

val = Number(val)

console.log(val.toFixed(5), typeof val)

//NaN is not a number

val = parseFloat('100.0565')
console.log(val, typeof val)

//parseInt and parseFloat are also options to convert types


//Type Coercion

const val1 = "5"
const val2 = 6
const sum = val1+val2
console.log(sum, typeof sum)
