function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  if (buttonElement.innerText === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
  } else {
    buttonElement.innerHTML = "Subscribe";
  }
}

function handleCostonKeydown(event) {
  if (event.key === "Enter") {
    calculatorTotal();
  }
}

function calculatorTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  // Value from the DOM will be a string. We need to convert to a number.
  let cost = Number(inputElement.value);
  console.log(cost);

  if (cost < 40) {
    cost = cost + 10;
    console.log(cost);
  }

  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}
