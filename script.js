const linkElement = document.getElementById("ar-link");
linkElement.addEventListener("message", function(event){
  if (event.data == "apple_ar_quicklook_button_tapped") {
    window.location.href = "teladolink.html"
  }
}, false)
