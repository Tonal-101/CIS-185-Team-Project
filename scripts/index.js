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
  if(total > 0) {
    alert("Your order has been placed!")
  } else {
    alert("Could not place order. Please try again.")
  }
}

function chooseEntree(buttonID) {
  const selectedItem = document.getElementById(buttonID);
  
  const defaultCSS = "btn-default";
  const activeCSS = "btn-active-entree";

  if(selectedItem.classList.contains(defaultCSS)) {
    selectedItem.classList.replace(defaultCSS, activeCSS); // if unselected, select button
    subtotal += getPrice(buttonID);
  } else {
    selectedItem.classList.replace(activeCSS, defaultCSS); // if selected, unselect button
    subtotal -= getPrice(buttonID);
  }

  calculateTotals();
}

function chooseAddOns(buttonID) {
  const selectedItem = document.getElementById(buttonID);
  
  const defaultCSS = "btn-add-ons";
  const activeCSS = "btn-add-ons-active";

  if(selectedItem.classList.contains(defaultCSS)) {
    selectedItem.classList.replace(defaultCSS, activeCSS); // if unselected, select button
    subtotal += getPrice("addOnPrice");
  } else {
    selectedItem.classList.replace(activeCSS, defaultCSS); // if selected, unselect button
    subtotal -= getPrice("addOnPrice");
  }

  calculateTotals();
}

function getPrice(id) {
  switch(id) {
    case(id = "hamburger"):
      return hamburgerPrice;
      
    case(id = "pizza"):
      return pizzaPrice;

    case(id = "salad"):
      return saladPrice;

    case(id = "addOnPrice"):
      return addOnPrice;
  }
}

function calculateTotals() {
  taxAmount = subtotal * taxPercent;
  total     = subtotal + taxAmount;

  document.getElementById("subtotal").value = "$" + subtotal.toFixed(2);
  document.getElementById("tax").value      = "$" + taxAmount.toFixed(2);
  document.getElementById("total").value    = "$" + total.toFixed(2);

}