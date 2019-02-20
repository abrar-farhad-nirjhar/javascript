//init github
const github = new Github()
// init UI

const ui = new UI()
// Search Input

const searchUser = document.getElementById('searchUser')


searchUser.addEventListener('keyup', (e)=>{
    //Get input text
    const userText = e.target.value

    if(userText!== ''){
        //Make HTTP call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==='Not Found'){
                //Show alert
                
            }
            else{
                //Show profile
                ui.showProfile(data.profile)
            }
        })
        
    }
    else{
        //Clear profile
    }
})