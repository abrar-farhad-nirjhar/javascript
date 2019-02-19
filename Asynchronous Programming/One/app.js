document.getElementById('button').addEventListener('click', loadData);



function loadData(){
    // Create an XHR object
    const xhr = new XMLHttpRequest();

    //Optional - Used for spinners/loaders

    xhr.onprogress = function(){
        console.log("Fetching State")
    }

    // OPEN

    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
            document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`
            
        }
    }


    xhr.onerror = function(){
        console.log("There was an error")
    }

    xhr.send()
}