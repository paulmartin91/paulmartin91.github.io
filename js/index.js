//Sidebar

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

document.getElementById("pagestyle").setAttribute("href", "MOBILE/Mobile_Style.css");
}

/*Projects Tab*/

//Fades out the placeholder on hover
$(".projectsNav a").hover(function() {
  $("#projectPlaceholder").fadeOut();
});

//Initates the function when hovering over projects list
$(".projectsNav a").hover(function() {
  //Assignes 'Target' with the elements data-target, adds '#'
  var target = "#" + $(this).data("target");

  //Fades out every element that is not being hovered
  $(".target")
    .not(target)
    .stop(true, false, true)
    .fadeOut(100);

  //Fades in target
  $(target)
    .stop(true, false, true)
    .fadeIn(100);
});

/*Projects Tab End*/

//false = sidebar closed
var navOpen = false;
var arrowRotate = 180;

function toggleNav(divElement) {
  //if closed the button adds 100% to width
  if (navOpen == false) {
    document.getElementById("mySidenav").style.width = "98%";
      
    //makes projects vissible
    if(divElement.id == 'arrow'){
    $("#projectsMainBox").animate({ opacity: "1" }, 20);
    $("#arrowFade1").animate({ opacity: "0" }, 20);
    }
    
    //makes blog vissible
    if(divElement.id == 'arrow1'){
    $("#blogMainBox").animate({ opacity: "1" }, 20);
    $("#arrowFade").animate({ opacity: "0" }, 20);
    }
    
    //flips the arrow to 180 degrees
    document.getElementById(divElement.id).style.transform =
      "rotate(" + arrowRotate + "deg)";

    //changes the text to 'Home'
    document.getElementById(divElement.id).innerHTML = "Home↓";

    //sets the rotation back to 0
    arrowRotate = 0;

    //sets sidebar to open
    navOpen = true;
  } else {
    //if open, the tab returns to 50px width
    document.getElementById("mySidenav").style.width = "50px";

    //makes projects hidden
    if(divElement.id == 'arrow'){
    $("#projectsMainBox").animate({ opacity: "0" }, 900);
    $("#arrowFade1").animate({ opacity: "1" }, 20);
    }
    
    if(divElement.id == 'arrow1'){
    $("#blogMainBox").animate({ opacity: "0" }, 900);
    $("#arrowFade").animate({ opacity: "1" }, 20);
    }  
    
    //flips the arrow to 0 degrees
    document.getElementById(divElement.id).style.transform =
      "rotate(" + arrowRotate + "deg)";

    //changes the text back to original name
    if(divElement.id == 'arrow'){
      document.getElementById(divElement.id).innerHTML = "↓Projects";
    }
     if(divElement.id == 'arrow1'){
      document.getElementById(divElement.id).innerHTML = "↓Blog";
    } 
    //sets the rotation back to 180
    arrowRotate = 180;

    //sets sidebar to closed
    navOpen = false;
  }
}

/*TextTypeGag*/

var text1 = [
  ["Coding genius", 0],
  ["Good at coding", 2000],
  ['Can write "code"', 2000],
  ["Amozinng Speller", 0],
  ["Self taught coder", 4000000000000000000000]
];

var i = 0;
var j = 0;
var pauseTime = 5000;

/*Starting the process*/
function start(arg, text) {
  /*Picks a random quote, assigns it to "message"*/
  var mess = text[j];
  var txt = mess[0];
  var PT = mess[1];
  j++;
  /* Var for Typing out the text*/
  var startTyping = function type(arg) {
    document.getElementById(arg.id).innerHTML += txt[i];
  };
  console.log(txt);

  /*Go = Starts typing out the text, stops when gets to text length*/
  var go = setInterval(function() {
    if (i < txt.length) {
      startTyping(arg);
      i++;
    } else {
      /*Stops the process*/
      clearInterval(go);
      console.log("Go Complete, " + PT + " Second Pause Start");
      setTimeout(function() {
        /*backspaces*/
        var back = setInterval(function() {
          if (i > 0) {
            var backspaced = document.getElementById(arg.id).innerHTML;
            var backspace1 = backspaced.slice(0, backspaced.length - 1);
            document.getElementById(arg.id).innerHTML = backspace1;
            i--;
          } else {
            clearInterval(back);
            console.log("Backspace Finsihed!");
            /*The process has now finished, start from the top!*/
            setTimeout(function() {
              start(arg, text);
            }, 1000);
          }
        }, 100);

        console.log("Pause Complete, starting backspace");
      }, PT);
    }
  }, 100 /*delay for keystrokes*/);

  /*Innitiates Go*/
  go();
}
//Transitional Backgrounds

var imageArray = [
    "Images/BG1.jpg",
    "Images/BG2.jpg",
    "Images/BG3.jpg",
    "Images/BG4.jpg",
    "Images/BG5.jpg",
    "Images/BG6.jpg",
    "Images/BG7.jpg",
    "Images/BG8.jpg",
    "Images/BG9.jpg",
    "Images/BG10.jpg",
    "Images/BG11.jpg",
    "Images/BG12.jpg",
    "Images/BG14.jpg"
];

setInterval(function newFlag(){
document.getElementById("landingPagePhoto").style.backgroundImage = "url(" + imageArray[Math.floor(Math.random() * Math.floor(imageArray.length))] + ")";
}, 10000)