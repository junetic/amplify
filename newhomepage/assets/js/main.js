/* Main JS */
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var mainheader = document.getElementById("header");
var logo = document.getElementById("navlogo");   

// Get the offset position of the navbar
var sticky = mainheader.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    mainheader.classList.add("sticky");
    logo.classList.add("logoswitch");
    // console.log(logo);

  } else {
    mainheader.classList.remove("sticky");
    logo.classList.remove("logoswitch");

  }
}