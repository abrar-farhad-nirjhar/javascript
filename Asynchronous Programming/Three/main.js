

document.getElementById('getJoke').addEventListener('click', getJoke)

function getJoke(event){

    // event.preventDefault()

    const xhr = new XMLHttpRequest()

    xhr.open('GET', "http://api.icndb.com/jokes/random")


    xhr.onload = function(){
        if(this.status===200){
            const joke = JSON.parse(this.responseText)

            console.log(joke.value)

            document.getElementById('joke').innerHTML = `<h1>${joke.value.joke}</h1>`;
        }
    }


    xhr.send()

}