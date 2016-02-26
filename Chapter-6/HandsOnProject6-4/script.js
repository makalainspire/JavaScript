/*
      JavaScript 6th Edition
      Chapter 6
      Hands-on Project 6-4

      Author: makala
      Date:   02-05-16

      Filename: index.htm
*/

"use strict";

/* remove default value and formating from selection list */
function removeSelectDefault() {
    var selectBox = document.getElementById("size");
    selectBox.selectedIndex = -1;
    selectBox.style.boxShadow = "none";
}

/* remove fallback placeholder text */
function zeroPlaceholder() {
    var instrBox = document.getElementById("instructions");
    instrBox.style.color = "black";
    if (instrBox.value === instrBox.placeholder) {
        instrBox.value = "";
    }
}

/* restore placeholder if no user entry */
function checkPlaceholder() {
    var instrBox = document.getElementById("instrustions");
    if (instrBox.value === "") {
        instrBox.style.color = "rgb(178,184,183)";
        instrBox.value = instrBox.placeholder;
    }
}

/* add placeholder text for browsers that dont support */
function generatePlaceholder() {
    if (!Modernizr.input.placeholder) {
        var instrBox = document.getElementById("instructions");
        instrBox.value = instrBox.placeholder;
        instrBox.style.color = "rgb(178,184,183)";
        if (instrBox.addEventListener) {
            instrBox.addEventListener("focus", zeroPlaceholder, false);
            instrBox.addEventListener("blur", checkPlaceholder, false);
        } else if (instrBox.attachEvent) {
            instrBox.attachEvent("onfocus", zeroPlaceholder);
            instrBox.attachEvent("onblur", checkPlaceholder);
        }
    }
}

/* run intitial form config functions */
function setUpPage() {
    removeSelectDefault();
    generatePlaceholder();
}

/* run setup functions when page finishes loading */
 if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
 } else if (window.attachEvent) {
        window.attachEvent("onload", setUpPage);
}
