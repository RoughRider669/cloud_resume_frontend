function visitorCounter(){
  fetch("https://qd2fs0myr5.execute-api.us-east-2.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
    })
}