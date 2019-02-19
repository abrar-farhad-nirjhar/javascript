const http = new easyHTTP();

//Get Posts

http.get('https://jsonplaceholder.typicode.com/posts/',
function(err,posts){
    if(err){
        console.log(err)
    }
    else{
        console.log((posts))
    }
})

const data = {
    title: "custom post",
    body: "this is a custom post"
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
        console.log(err)
    }
    else{
        console.log((post))
    }

})
