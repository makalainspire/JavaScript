/*  JavaScript 6th Edition
    Chapter 10
    Hands-on Project 10-3

    Author: makala
    Date:   03-04-16

    Filename: script.js
*/

"use strict";

//global vars
var waitForUser;

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
  var Lat = position.coords.latitude;
  var Lng = position.coords.longitude;
  var mapOptions = {
      center: new google.maps.LatLng(Lat, Lng),
      zoom: 10 
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function fail() {
    document.getElementById("map").innerHTML = "Unable to access your current location.";
}
