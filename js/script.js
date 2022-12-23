function menuToggle() {
  document.getElementById("menuButton").classList.toggle("change");
  document.getElementById("mySidenav").classList.toggle("change");
}
    
function closeNav() {
  let nav = document.getElementById("mySidenav");
  let menuBtn = document.getElementById("menuButton")
  if (nav.className == "sidenav change" && menuBtn.className =="button-container change") {
    nav.classList.remove("change");
    menuBtn.classList.remove("change");
  } 
}