document.getElementById('one').addEventListener('click', getText)

function getText(event){
    fetch('test.txt')
    .then(function(res){

        return res.text()

    })
    .then(function(data){
        console.log(data)

        document.getElementById('output').innerHTML = data
    })
    .catch(function(err){
        console.log(err)
    });
}

document.getElementById('two').addEventListener('click', getJSON)

function getJSON(event){
    fetch('customer.json')
    .then(function(res){

        return res.json()

    })
    .then(function(data){
        console.log(data)
        let output = ''
        data.forEach(element => {

            output+= `<li>${element.name}</li>`
            
        });
        document.getElementById('output').innerHTML = output
    })
    .catch(function(err){
        console.log(err)
    });

}

document.getElementById('three').addEventListener('click', getExternal)

function getExternal(event){
    fetch('https://api.github.com/users')
    .then(function(res){

        return res.json()

    })
    .then(function(data){
        console.log(data)
        let output = ''
        data.forEach(element => {

            output+= `<li>${element.login}</li>`
            
        });
        document.getElementById('output').innerHTML = output
    })
    .catch(function(err){
        console.log(err)
    });

}


