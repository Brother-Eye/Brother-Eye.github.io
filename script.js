const linkElement = document.getElementById("ar-link");
linkElement.addEventListener("message", function(event){
<<<<<<< HEAD
  console.log(event);
  if (event.data == "_apple_ar_quicklook_button_tapped") {
    window.open("https://www.google.com.br")
=======
  console.log("message sent");
  window.open("https://www.google.com.br")
  console.log(event);
  if (event.data == "apple_ar_quicklook_button_tapped") {
>>>>>>> parent of ec1f449... alteração call to action
    console.log("data correct");
  }
}, false)

const linkTest = document.getElementById("button-test");
linkTest.addEventListener("click", function(event){
  console.log("click test");
  window.open("teladolink.html")
}, false)
