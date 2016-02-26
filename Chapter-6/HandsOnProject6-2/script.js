/*
      JavaScript 6th Edition
      Chapter 6
      Hands-on Project 6-2

      Author: makala
      Date:   02-05-16

      Filename: index.htm
*/
"use strict";

var formValidity = true;

/* validate required fields */
function validateRequired() {
    var inputElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputElements.length;
    var requiredValidity = true;
    var currentElement;
    try {
        for (var i = 0; i < elementCount; i++) {
            //validate all input elements in fieldset
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                requiredValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (requiredValidity === false) {
            throw "Please complete all fields.";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

/* validate number fields for older browsers */
function validateNumbers() {
    var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
    var elementCount = numberInputs.length;
    var numErrorDiv = document.getElementById("numErrorText");
    var numbersValidity = true;
    var currentElement;
    try {
        for (var i = 0; i < elementCount; i++) {
            //validate all input elements of type "number" in fieldset
            currentElement = numberInputs[i];
            if (isNaN(currentElement.value) || (currentElement.value === "")) {
                currentElement.style.background = "rgb(255,233,233)";
                numbersValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (numbersValidity === false) {
            throw "Zip and Social Security values must be numbers."
        }
        numErrorDiv.style.display = "none";
        numErrorDiv.innerHTML = "";
    }
    catch (msg) {
        numErrorDiv.innerHTML = msg;
        formValidity = false;
    }
}

/* validate form */
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault(); //prevents form from submiting
    } else {
        evt.returnValue = false; //prevent form from submitting in IE8
    }
    formValidity = true; //RESET VALUE FOR REVALIDATION
    validateRequired();
    validateNumbers();
    if (formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }
}

var addressBox = document.getElementById("addrinput");
/* remove fallback placeholder text */
function zeroPlaceholder() {
    addressBox.style.color = "black";
    if (addressBox.value === addressBox.placeholder) {
        addressBox.value = "";
    }
}
/* restore placeholder text for browsers that dont support placeholder attrib */
function checkPlaceholder() {
   if (addressBox.value === "") {
       addressBox.style.color = "rgb(178,184,183)";
       addressBox.value = addressBox.placeholder;
   }
}

/* add placeholder text for browsers that dont support placeholder attrib */
function generatePlaceholder() {
    if(!Modernizr.input.placeholder) {
        addressBox.value = addressBox.placeholder;
        addressBox.style.color = "rgb(178,184,183)";
        if (addressBox.addEventListener) {
            addressBox.addEventListener("focus", zeroPlaceholder, false);
            addressBox.addEventListener("blur", checkPlaceholder, false);
        } else if (addressBox.attachEvent) {
            addressBox.attachEvent("onfocus", zeroPlaceholder);
            addressBox.attachEvent("onblur", zeroPlaceholder);
        }
    }
}

/* create event listeners */
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

/* run initial form config function */
function setUpPage() {
    createEventListeners();
    generatePlaceholder();
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener ("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
