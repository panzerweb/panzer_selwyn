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