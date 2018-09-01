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
  
//changes the text to 'Home'
document.getElementById('arrow').innerHTML = 'Home↓';
  
//sets the rotation back to 0
  arrowRotate=0;
  
//sets sidebar to open
  navOpen = true;
 
} else {
  //if open, the tab returns to 50px width
    document.getElementById("mySidenav").style.width = "50px";
  
//flips the arrow to 0 degrees
  document.getElementById("arrow").style.transform = "rotate("+ arrowRotate +"deg)";
  
//changes the text back to 'Projects'
  document.getElementById('arrow').innerHTML = '↓Projects';
  
//sets the rotation back to 180
  arrowRotate=180;
  
//sets sidebar to closed
  navOpen = false;
}

}

/*TextTypeGag*/

var text1 = [["Coding genius", 500], ["Coding Pro", 2000], ["Can write \"code\"", 2000], ["Amozinng Speller", 0], ["Self taught coder", 4000000000000000000000]]
var i = 0;
var j = 0;
var pauseTime = 5000;

/*Starting the process*/
function start(arg, message) {

/*Picks a random quote, assigns it to "message"*/
var mess = text1[j];
message = mess[0];
var PT = mess[1];
j++;
/* Var for Typing out the text*/
var startTyping = function type(arg) {
  document.getElementById(arg.id).innerHTML += message[i];
  }
  console.log(message);
  
/*Go = Starts typing out the text, stops when gets to text length*/
var go = setInterval(function(){
if(i < message.length) {
  startTyping(arg)
  i++;
} else {
  
/*Stops the process*/
  clearInterval(go);
  console.log("Go Complete, "+PT+" Second Pause Start");
  setTimeout(function(){ 
  
    /*backspaces*/
var back = setInterval(function(){ 
  if (i > 0) {
var backspaced = document.getElementById(arg.id).innerHTML;
var backspace1 = backspaced.slice(0, backspaced.length-1);
document.getElementById(arg.id).innerHTML= backspace1;
    i--;
  } else {
  clearInterval(back);
  console.log("Backspace Finsihed!")
  ;
  /*The process has now finished, start from the top!*/
  setTimeout(function(){start(arg)}, 1000);
  }
}, 100);
    
  console.log("Pause Complete, starting backspace");}, PT);
}
}, 100/*delay for keystrokes*/);
  
/*Innitiates Go*/
go();
  
}