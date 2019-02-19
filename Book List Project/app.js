// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;

}





//UI Constructor

function UI(){
    

}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    //Create tr element
    const row = document.createElement('tr')
    //Inser cols

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row)
}

UI.prototype.showAlert = function(message, className){

    //Create a div
    const div = document.createElement('div')
    //Add classes
    div.className = `alert ${className}`
    // Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form')
    //insert Alert
    container.insertBefore(div, form)

    //Timeout after 3 seconds

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000)


}
UI.prototype.clearFields = function(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

//Delete

UI.prototype.deleteBook = function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove()
    }
};


//Event Listeners
document.getElementById('book-form').addEventListener('submit',
function(e){
   
    // Getting form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    

    //Instantiating a new book
    const book = new Book(title, author, isbn)
    const ui = new UI()
    //Validate 

    if(title==='' || author==='' || isbn===''){
        //Error alert
        ui.showAlert('Please fill all the fields...', 'error')
    }
    else{

        //Add book to list
        ui.addBookToList(book);
        //Clearing the fields for new input
        ui.clearFields()

        ui.showAlert('Book added', 'success');
    
        
    }

    
    e.preventDefault()
})

// Event Listener for delete

document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI()

    ui.deleteBook(e.target)

    ui.showAlert('Deleted Successfully', 'success')

    e.preventDefault()
});