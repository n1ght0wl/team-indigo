
document.getElementById("quote").onload = function() {typeWriter()};

var i = 0;
var speed = 50;

function typeWriter() {
 var txt = '“You don\'t have to see the whole staircase in order to take the first step”';

  if (i < txt.length) {
      document.getElementById("quote").innerHTML += txt.charAt(i);

    i++;
    setTimeout(typeWriter, speed);
  }
}


// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

// var bar = new ProgressBar.Path('#heart-path', {
//     easing: 'easeInOut',
//     duration: 1400
//   });
  
//   bar.set(0);
//   bar.animate(1.0);  // Number from 0.0 to 1.0



// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
