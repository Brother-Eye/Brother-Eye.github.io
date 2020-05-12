window.addEventListener("load", function(){
  $("#ar-link").trigger("click")
  console.log("DOM ready");
});
const linkElement = document.getElementById("ar-link");
linkElement.addEventListener("message", function(event){
  console.log(event);
  window.open("https://www.google.com");
  if (event.data == "_apple_ar_quicklook_button_tapped") {
    console.log("data correct");
  }
}, false);

  const linkTest = document.getElementById("button-test");
  linkTest.addEventListener("click", function(event){
    console.log("click test");
    window.open("teladolink.html");
  }, false);
