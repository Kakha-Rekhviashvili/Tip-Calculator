let _bill;
let _percent;
let _person;
let _tip_amount = Number(0).toFixed(2);
let _total = Number(0).toFixed(2);
let _errorZero = "Can't be zero";
let _errorNegative = "Can't be negative";
let _nan = "Not number";
let _errorLocation;
let child = document.querySelectorAll(".percentage-div > button ");

document.getElementById("tip_amount").innerHTML = "$" + _tip_amount;
document.getElementById("per-person").innerHTML = "$" + _total;

function reset() {
  let _tip_amount = Number(0).toFixed(2);
  let _total = Number(0).toFixed(2);

  document.getElementById("tip_amount").innerHTML = "$" + _tip_amount;
  document.getElementById("per-person").innerHTML = "$" + _total;
  document.getElementById("bill").value = 0;
  document.getElementById("person").value = 0;
  document.getElementById("percent").value = "";
  for (n = 0; n < 5; n++) {
    child[n].classList.remove("active");
  }
}

function initialise_Bill() {
  _bill = document.getElementById("bill").value;
  _errorLocation = document.getElementById("err" + Object.keys({ _bill })[0]);
  checking(_bill, _errorLocation);
  Calculate();
}

function initialise_Percent(percent) {
  _percent = percent;
  _errorLocation = document.getElementById(
    "err" + Object.keys({ _percent })[0]
  );

  for (n = 0; n < 5; n++) {
    if (child[n].value != percent) {
      child[n].classList.remove("active");
    } else {
      child[n].classList.add("active");
    }
  }
  checking(_percent, _errorLocation);
  Calculate();
}

function initialise_Person() {
  _person = document.getElementById("person").value;
  _errorLocation = document.getElementById("err" + Object.keys({ _person })[0]);
  checking(_person, _errorLocation);
  Calculate();
}

function tip_Amount() {
  _tip_amount = (_bill * (_percent / 100)) / _person;
}

function total() {
  _total = _bill / _person + _tip_amount;
}

function checking(parameter, errorLocation) {
  if (isNaN(parameter)) {
    errorLocation.innerHTML = _nan;
  } else if (parameter == 0) {
    errorLocation.innerHTML = _errorZero;
  } else if (parameter < 0) {
    errorLocation.innerHTML = _errorNegative;
  } else {
    errorLocation.innerHTML = "";
  }
}

function Calculate() {
  if (
    _bill != 0 &&
    _bill > 0 &&
    isNaN(_bill) == false &&
    // _percent != 0 &&
    _percent >= 0 &&
    isNaN(_percent) == false &&
    _person != 0 &&
    _person > 0 &&
    isNaN(_person) == false
  ) {
    tip_Amount();
    total();

    document.getElementById("tip_amount").innerHTML =
      "$" + _tip_amount.toFixed(2);
    document.getElementById("per-person").innerHTML = "$" + _total.toFixed(2);
  }
}
