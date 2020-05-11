document.onload = function(){
  console.log("carregando USDZ"); window.open("teste_animacao.usdz#callToAction=Add%20to%20cart&checkoutTitle=Bolsa%20Padra&checkoutSubtitle=Bolsa%20Padra%20feita%20em%20couro&price=$500",_top)}
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
