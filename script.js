const linkElement = document.getElementById("ar-link");
linkElement.addEventListener("message", function(event){
  if (event.data == "apple_ar_quicklook_button_tapped") {
    window.open("https://www.google.com.br")
  }
}, false)
