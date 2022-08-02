// var elP = confirm("Sayohatga borishga tayyormisiz");
var elInput = document.querySelector("input")
var elForm = document.querySelector ("form") ;

var elText = document.createElement("p");

elForm.appendChild(elText);


elForm.addEventListener("submit", function(qwe) {
  qwe.preventDefault();



  if (elInput.value >= 150 && elInput.value <= 200 ) {
    elText.textContent = "pulingiz yetadi!"
  }

  else if (isNaN(elInput.value)) {
    elText.textContent = "son kiriting!"
  }

  else if (elInput.value >= 200 && elInput.value <= 100000) {
    elText.textContent = "Pulingiz kop!"
  }
  else {
    elText.textContent = "pulingiz yetmaydi!"
  }
});