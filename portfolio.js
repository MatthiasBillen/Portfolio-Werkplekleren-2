let vorigeScrollPos = window.pageYOffset;
window.onscroll = function() {
  let huidigeScrollPos = window.pageYOffset;
  if (vorigeScrollPos > huidigeScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  vorigeScrollPos = huidigeScrollPos;
}
 
  