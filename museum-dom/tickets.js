const overlay = document.getElementsByClassName('tickets-overlay');
const form = document.getElementsByClassName('tickets-form');


function getForm(){
  overlay[0].classList.add("add-overlay");
  setTimeout(addAnimation, 200);
}
function addAnimation(){
  form[0].classList.add("form-animation");
}
function closeForm(){
  form[0].classList.remove("form-animation");
  setTimeout(removeAnimation, 900);
}
function removeAnimation(){
   overlay[0].classList.remove("add-overlay");
}