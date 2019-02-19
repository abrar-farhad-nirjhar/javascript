
const http = new EasyHTTP()

let users;
http.get("https://jsonplaceholder.typicode.com/users")
.then(data=>console.log(data))
.catch(err=>console.log(err))


// console.log(users)

// User Data

const user = {
    name:"Abrar Farhad",
    username:"Abrar",
    email:"test@test.com"

}

http.post("https://jsonplaceholder.typicode.com/users",user)
.then(test=>console.log(test))
.catch(err=>console.log(err))

http.put("https://jsonplaceholder.typicode.com/users/2",user)
.then(test=>console.log(test))
.catch(err=>console.log(err))

http.delete("https://jsonplaceholder.typicode.com/users/2")
.then(test=>console.log(test))
.catch(err=>console.log(err))
