/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-5

    Author: makala
    Date:   03-09-16

    Filename: script.js
*/
// bejing 39.941705, 116.365834
// paris 48.865550, 2.311843
// rio -22.908615, -43.568763


"use strict";

//global vars
var waitForUser

function setUpPage() {
    var buttons = document.querySelectorAll("#cities div");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", createMap, false);
    }
    }


function geoTest() {
   waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createMap, fail, {timeout: 10000});
    } else {
        fail();
    }
}

function createMap(position) {
    clearTimeout(waitForUser);
    if (position.coords) {
    var Lat = position.coords.latitude;
    var Lng = position.coords.longitude;
    } else {
    var city = this.innerHTML;
     if (city === "Beijing") {
         Lat = 39.941705;
         Lng = 116.365834;
    } 
    if (city === "Paris") {
         Lat = 48.865550;
         Lng = 2.311843;
    }
    if (city === "Rio de Janeiro") {
         Lat = -22.882414;
         Lng = -43.495159;
     }
     document.getElementById("caption").innerHTML = city;
    }
  var mapOptions = {
      center: new google.maps.LatLng(Lat, Lng),
      zoom: 10 
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function fail() {
    document.getElementById("map").innerHTML = "Unable to access your current location.";
}

window.addEventListener("load", setUpPage, false);
