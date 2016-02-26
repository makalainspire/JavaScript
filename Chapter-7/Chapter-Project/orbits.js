/*
      JavaScript 6th Edition
      Chapter 7
      Chapter case

      Outer Orbits booking page
      Author: 
      Date:   

      Filename: orbits.js
*/
"use strict"; //interpret contents in JavaScript strict mode

var dateObject = new Date();

function displayCalendar(whichMonth) {
    var date;
    var dateToday = new Date();
    var dayOfWeek;
    var daysInMonth;
    var dateCells;
    var captionValue;
    var month;
    var year;
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (whichMonth === -1) {
        dateObject.setMonth(dateObject.getMonth() - 1);
    } else if (whichMonth === 1) {
        dateObject.setMonth(dateObject.getMonth() + 1);
    }
    month = dateObject.getMonth();
    year = dateObject.getFullYear();
    dateObject.setDate(1);
    dayOfWeek = dateObject.getDay();
    captionValue = monthArray[month] + " " + year;
    document.querySelector("#cal table caption").innerHTML = captionValue;
    if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) { // Jan, Mar, May, Jul, Aug, Oct, Dec
        daysInMonth = 31;
    } else if (month === 1) { // Feb
        if (year % 4 === 0) {
            //year ending in 00 nat a leap year unless
            //divisible by 400
            if (year % 400 === 0) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
        } else {
            daysInMonth = 29;
        }
    } else {
        daysInMonth = 28;
    } else { // Apr, Jun, Sep, Nov
  daysInMonth = 30
}

dateCells = document.getElementsByTagName("td");
for (var i = 0; i < dateCells.length; i++) {
    //clear existing table dates
    dateCells[i].innerHTML = "";
    dateCells[i].className = "";
}
for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
    //add dates to days cells
    dateCells[i].innerHTML = dateObject.getDate();
    dateCells[i].className = "date";
    if (dateToday < dateObject) {
        dateCells[i].className = "futuredate";
    }
    date = dateObject.getDate() + 1;
    dateObject.setDate(date);
}

        }
