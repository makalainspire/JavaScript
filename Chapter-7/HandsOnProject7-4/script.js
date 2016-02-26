/*
      JavaScript 6th Edition
      Chapter 7
      Hands-on Project 7-4

      Author: makala
      Date:   02-08-16

      Filename: script.js
*/

"use strict";

var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");

function previewOrder() {
    processDeliveryInfo();
    document.getElementsByTagName("section")[0].style.display = "block";
}

function processDeliveryInfo() {
  var prop;
  delivInfo.name = document.getElementById("nameinput").value;
  delivInfo.address = document.getElementById("addrinput").value;
  delivInfo.city = document.getElementById("cityinput").value;
  delivInfo.email = document.getElementById("emailinput").value;
  delivInfo.phone = document.getElementById("phoneinput").value;
  for (prop in delivInfo) {
     
      delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
     
  }
  document.getElementById("deliverTo").style.display = "block"; 
}


    
function createEventListener() {
    var previewBtn = document.getElementById("previewBtn");
    if (previewBtn.addEventListener) {
        previewBtn.addEventListener("click", previewOrder, false);
    } else if (previewBtn.attachEvent) {
        previewBtn.attachEvent("onclick", previewOrder);
    }
}
    
    if (window.addEventListener) {
        window.addEventListener("load", createEventListener, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", createEventListener);
    }
  
