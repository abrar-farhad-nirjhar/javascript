//String


const name1 = 'Abrar';
const name2 = new String("Abrar")
name2.foo = 'bar'

console.log(typeof name2)


if(name2 === 'Abrar'){
    console.log('Yes')
} else{
    console.log("NO")
}

const num1 = 5
const num2 = new Number(5)

console.log(num2)

const getsum1 = function(x,y){
    return x+y
}
console.log(getsum1(1,1))

