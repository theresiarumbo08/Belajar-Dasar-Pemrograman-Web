function myFunction() {
  var x = document.getElementById("myDropdownmenu");
  if (x.className === "dropdown-menu") {
    x.className += " responsive";
  } else {
    x.className = "dropdown-menu";
  }
}