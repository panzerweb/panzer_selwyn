// Get the navigation bar
const header = document.getElementById('header-nav');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Check if the user has scrolled down past a certain point (e.g. 10px)
    if (window.scrollY > 10) {
        // Add the 'scrolled' class to the navbar
        header.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class from the navbar
        header.classList.remove('scrolled');
    }
});


// Get the navigation bar
const offHeader = document.getElementById('offcanvasNavbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Check if the user has scrolled down past a certain point (e.g. 10px)
    if (window.scrollY > 10) {
        // Add the 'scrolled' class to the navbar
        offHeader.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class from the navbar
        offHeader.classList.remove('scrolled');
    }
});


// todo Filterable Buttons for each projects

const filterButtons = document.querySelectorAll('.filter-button');
const projectContainer = document.querySelectorAll('.project-container');

filterButtons.forEach(function(button){
    button.addEventListener('click', function(){
        const btnCategory = button.dataset.category;

        projectContainer.forEach(function(container){
            const containerCategory = container.dataset.category;

            if (btnCategory === 'all' || containerCategory === btnCategory) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none';

            }
        })
    })
})

// todo Active Button
// Get the container element
var btnContainer = document.getElementById("filters");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("filter-button");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// todo For the Full Details of each Projects, an onclick for href

function myGithub(){
    window.open("https://github.com/panzerweb", "_blank");
}

function linkToPanzerWebSite(){
    window.open("https://sites.google.com/dnsc.edu.ph/panzerweb/home?authuser=1", "_blank");
}

function linkToPhotoITSite(){
    window.open("https://sites.google.com/dnsc.edu.ph/group-4-web/home?authuser=1","_blank");
}

function linkToYouTubeBloodDrive(){
    window.open("https://youtu.be/HDKlyf5FjGQ?si=mPkP7Jskkg2tYmE9", "_blank");
}

function linkToGithubPetShop(){
    window.open("https://github.com/panzerweb/GridLayoutProject.git ", "_blank");
}

function linkToUtangTracker(){
    window.open("https://github.com/panzerweb/UtangTrackerUI.git", "_blank");
}

function linkToHoneyDiasWebsite(){
    window.open("https://panzerweb.github.io/HoneyDias/", "_blank");
}