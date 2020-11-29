//init gitHUB
const gitHub = new GitHub;

//init gitHUB
const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userInput = e.target.value;
    if (userInput !== '') {;
        //make http call
        gitHub.getUser(userInput)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                //show message
                ui.showAlert('User not found', 'alert alert-danger') //takes in the message and the bootstrap classes for alerts

            } else {
                //show profile
                ui.showProfile(data.profile)
                //show repos
                ui.showRepos(data.repos)
            }
        })
    } else {
        //if the input is empty, clear the profile
        ui.clearProfile();
    }
})