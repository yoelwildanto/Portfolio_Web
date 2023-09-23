// Get references to the menu button and menu
var menuButton = document.getElementById('menu-button');
var menu = document.querySelector('.menu');

// Attach a click event to the menu button
menuButton.addEventListener('click', function() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none'; // Hide the menu
    } else {
        menu.style.display = 'block'; // Show the menu
    }
});
