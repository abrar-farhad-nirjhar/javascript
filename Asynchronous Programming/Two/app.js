document.getElementById('one').addEventListener('click', getCustomer)

function getCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true)

    xhr.onload = function(){
        if(this.status===200){
            // console.log("Connected")
            const customer = JSON.parse(this.responseText)
            console.log(customer)

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>


            `;
            document.getElementById('customer').innerHTML = output
        }
    }

    xhr.send();
}

document.getElementById('two').addEventListener('click', getCustomers);

function getCustomers(e){
    console.log("is this working")

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true)

    xhr.onload = function (){
        if(this.status===200){
            console.log("Connected")
            const customers = JSON.parse(this.responseText)
            // console.log(objs)

            let output = ''
            customers.forEach(customer => {

                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>


            `;
                
            });

            document.getElementById('customers').innerHTML = output


        }
        else{
            console.log("error")
        }
    }


    xhr.send()
}