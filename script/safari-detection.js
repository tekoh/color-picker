//definitely not copied haha.. https://stackoverflow.com/questions/7944460/detect-safari-browser
const ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    // Chrome
  } else {
    $("#color-selector input").val("safari") // for testing hehe

    $("#copy-button").empty()
    $("#copy-button").append('<img src="./assets/copy.png" draggable="false" />')

    $("#refresh-button").empty()
    $("#refresh-button").append('<img src="./assets/refresh.png" draggable="false" />')
  }
}