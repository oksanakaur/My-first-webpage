function changeCity() {
  let city = prompt("What city do you live in");
  let temperature = prompt("What temperature is it?");
  let heading = document.querySelector("h1");

  if (temperature < 0) {
    heading.innerHTML = "😟<br />Currently" +  temperature + "&#176; in" + city;
  } else {
    heading.innerHTML = "😁<br />Currently" +  temperature + "&#176; in" + city;
  }
}
let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCity);
