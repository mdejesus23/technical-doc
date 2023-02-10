function menuToggle() {
  document.getElementById("menuButton").classList.toggle("change");
  document.getElementById("mySidenav").classList.toggle("show");
}
    
function closeNav() {
  let nav = document.getElementById("mySidenav");
  let menuBtn = document.getElementById("menuButton")

  if (nav.classList.contains("show") && menuBtn.classList.contains("change")) {
    nav.classList.remove("show");
    menuBtn.classList.remove("change");
  } 
}

// If the user click dosen't match the menu button, close navigation and change menu
document.addEventListener("click", event => {
  if (!event.target.matches(".button")) {
      closeNav();
  }
});

// Get myModal element
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("chromedevImage");
let modalImg = document.getElementById("modalImage");
img.onclick = function(){
  debugger
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get close button
let close = document.getElementById("closeBtn");

// When the user clicks on <span> (x), close the modal
close.onclick = function(){ 
  modal.style.display = "none";
}