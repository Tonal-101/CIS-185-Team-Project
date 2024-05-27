// Javascript made by Tyler Nelson & David Mason

let subtotal   = 0.00;
let taxPercent = 0.0775; // decimal value of percent (ex. 7.75% => 0.0775)
let taxAmount  = 0.00;
let total      = 0.00;

const hamburgerPrice = 6.95;
const pizzaPrice     = 5.95;
const saladPrice     = 4.95;
const addOnPrice     = 0.75;

function placeOrder() {
  

  // checks if user ordered hamburger and adds to subtotal
  if(document.getElementById("hamburger").classList.contains("btn-active-entree")) {
    subtotal += hamburgerPrice;
  }

  // checks if user ordered pizza and adds to subtotal
  if(document.getElementById("pizza").classList.contains("btn-active-entree")) {
    subtotal += pizzaPrice;
  }

  // checks if user ordered salad and adds to subtotal
  if(document.getElementById("salad").classList.contains("btn-active-entree")) {
    subtotal += saladPrice;
  }
}

function chooseEntree(buttonID) {
  const selectedItem = document.getElementById(buttonID);
  
  const defaultCSS = "btn-default";
  const activeCSS = "btn-active-entree";

  if(selectedItem.classList.contains(defaultCSS)) {
    selectedItem.classList.replace(defaultCSS, activeCSS); // if unselected, select button
    subtotal += getEntreePrice(buttonID);
  } else {
    selectedItem.classList.replace(activeCSS, defaultCSS); // if selected, unselect button
    subtotal -= getEntreePrice(buttonID);
  }

  calculateTotals();
}

function chooseAddOns() {
  const selectedItem = document.getElementById(buttonID);
}

function getEntreePrice(id) {
  switch(id) {
    case(id = "hamburger"):
      return hamburgerPrice;
      break;
      
    case(id = "pizza"):
      return pizzaPrice;
      break;

    case(id = "salad"):
      return saladPrice;
      break;
  }
}

function calculateTotals() {
  taxAmount = subtotal * taxPercent;
  total     = subtotal + taxAmount;

  document.getElementById("subtotal").value = "$" + subtotal.toFixed(2);
  document.getElementById("tax").value      = "$" + taxAmount.toFixed(2);
  document.getElementById("total").value    = "$" + total.toFixed(2);

}