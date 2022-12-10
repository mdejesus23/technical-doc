  function openNav() {
    document.getElementById("myNavbar").style.visibility = "visible";
    document.getElementById("closebtn").style.visibility = "visible";
  }

        

  function closeNav() {
    let sw = window.innerWidth;
    let navbar = document.getElementById("myNavbar");
    let closeBtn = document.getElementById("closebtn");
      if (sw >= 1200) {
        navbar.style.visibility = "";
        closeBtn.style.visibility = "";
      } else {
        navbar.style.visibility = "hidden";
          closeBtn.style.visibility = "hidden";
          
      }
   }

    
      