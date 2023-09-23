// // click checkbox

// function toggleMenu() {
//     var checkbox = document.getElementById('menu-toggle');
//     checkbox.click(); // This simulates a click on the checkbox
// }



// var checkbox = document.getElementById('toggle-checkbox');
// var checkImage = document.getElementById('check-image');

// // Attach the click event to the image
// checkImage.addEventListener('click', function() {
//     // Toggle the checked state of the checkbox
//     checkbox.checked = !checkbox.checked;
// });


//navi toggle menu
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) =>{
    navItem.addEventListener("click", () =>{
        navigation.classList.remove("active");
    })
});