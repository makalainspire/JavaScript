/*
      JavaScript 6th Edition
      Chapter 9
      Hands-on Project 9-3

      Author: makala
      Date:   03-01-16

      Filename: script.js
*/

"use strict"

function processCookie() {
    if (document.getElementById("rememberinput").checked) {
      document.cookie = "username = " + document.getElementById("usernameinput").value;
    } else {
        var expiresDate = new Date();
        expiresDate.setDate(expiresDate.getDate() - 7);
        document.cookie = "username=null; expires=" + expiresDate.toUTCString();
    }
}

function populateInfo() {
    if (document.cookie) {
        var uname = document.cookie;
        uname = uname.substring(uname.lastIndexOf("=") + 1);
        document.getElementById("usernameinput").value = uname;
    }
}

function handleSubmit(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    processCookie();
    document.getElementsByTagName("form")[0].submit();
}

function createEventListeners() {
    var loginForm = document.getElementsByTagName("form")[0];
    if(loginForm.addEventListener) {
        loginForm.addEventListener("submit", handleSubmit, false);
    } else if (loginForm.attachEvent) {
        loginForm.attachEvent("onsubmit", handleSubmit);
    }
}

function setUpPage() {
    populateInfo();
    createEventListeners();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}