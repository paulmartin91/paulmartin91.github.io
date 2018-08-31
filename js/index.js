//Sidebar

//false = sidebar closed
var navOpen = false;
var arrowRotate = 180;

function toggleNav() {

//if closed the button adds 100% to width
if (navOpen == false) {
    document.getElementById("mySidenav").style.width = "98%";

//flips the arrow to 180 degrees
  document.getElementById("arrow").style.transform = "rotate("+ arrowRotate +"deg)";
  
//sets the rotation back to 0
  arrowRotate=0;
  
//sets sidebar to open
  navOpen = true;
 
} else {
  //if open, the tab returns to 50px width
    document.getElementById("mySidenav").style.width = "50px";
  
//flips the arrow to 0 degrees
  document.getElementById("arrow").style.transform = "rotate("+ arrowRotate +"deg)";
  
//sets the rotation back to 180
  arrowRotate=180;
  
//sets sidebar to closed
  navOpen = false;
}

}