var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elText = document.querySelector(".js-text");

var price = 3000

elForm.addEventListener("submit", function(e) {
  e.preventDefault();
   var elInputVal = +elInput.value;

   if (elInputVal > price ) {
    elText.textContent = "Qimmat ekan pulim yetmaydi"
   }
   if (elInputVal <= price) {
    elText.textContent = "Arzon ekan olaman"
   }
})