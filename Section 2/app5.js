console.log("app5")

const name = "Abrar";
const age = 23;
const job = "Software Engineer";
const city = "Dhaka"



//Without template strings (es5)

html = '<ul> <li> name : ' + name +'</li><li> Age: '+age+'</li><li>Job: '+job+'</li></ul>'



function hello(){
    return "hello"
}


//With template Strings

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${hello()}</li>
<li>${(age>30? "yes":"false")}
</ul>


`;

document.body.innerHTML = html

//Arrays

const numbers = [1,2,3,4,5]

const numbers2 = new Array(11,22,33,44,55)

const fruit = ['Apple', 'Banana', 'Orange', 'Pear']

const mixed = ['number', 23, 'Boolean', undefined, null, true, {a:1, b:2}, new Date()]
// console.log(mixed)



let val;



val = numbers.length

val = Array.isArray(numbers)

val = numbers[3]

numbers[3] = 300

val = numbers.indexOf(1)

//Mutating arrays with different methods

numbers.push(69)

numbers.pop()
numbers.pop()

//Push to front
numbers.unshift(12)


//Pop from front
numbers.shift()


//Splice
numbers.splice(1,2)

numbers.reverse()

val = numbers.concat(numbers2)


// val.sort()

// val = numbers.sort(function(x,y){
//     return x-y
// })


//returns first number under 50

val = numbers2.find(function under50(num){
    return num<50
})

console.log(numbers)
console.log(val)