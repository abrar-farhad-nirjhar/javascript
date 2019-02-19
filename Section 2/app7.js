//FUNCTION DECLARATIONS


function greet(name="John",lastname="Doe"){

    // console.log("Hello Friend")

    return "Hello "+name+" "+lastname
}

// console.log(greet("Abrar", "Farhad"))


//FUNCTION EXPRESSIONS

const square = function(x=0){
    return x*x

};

// console.log(square(9))

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFEs

(function(){
    console.log("This ran")
})()


// (function(name){
//     console.log("This ran "+name)
// })("abrar");

