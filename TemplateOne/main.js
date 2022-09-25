var mybutton = document.getElementById("myBtn");

window.onscroll = function scrollFunction() {
  if (window.scrollY >= 200 || document.body.scrollTop >= 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollUpFunction() {
  // window.scrollTO({left: 0, top:0, behavior;"smooth",}) 
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}