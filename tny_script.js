"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Juan Deaza
   Date:   23/11/2026

*/
/*Execute the function to run the countdown */
setInterval(runclock, 1000);

/* Function to run the countdown clock */
function runclock() {
   // Store the current date and time
   var currentday = new Date();
   var dateStr = currentday.toLocaleDateString();
   var timeStr = currentday.toLocaleTimeString();

   // Display the current date and time
   document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

   // Calculate the days left until the next New Year
   var nextyear = currentday.getFullYear() + 1;
   var newYear = new Date("January 1, " + nextyear + " 00:00:00");
   var daysleft = (newYear - currentday) / (1000 * 60 * 60 * 24);

   // Calculate the hours left in the remaining day
   var hrsleft = (daysleft - Math.floor(daysleft)) * 24;

   // Calculate the minutes left in the remaining hour
   var minsleft = (hrsleft - Math.floor(hrsleft)) * 60;

   // Calculate the seconds left in the remaining minute
   var secsleft = (minsleft - Math.floor(minsleft)) * 60;

   // Update the countdown display
   document.getElementById("days").textContent = Math.floor(daysleft);
   document.getElementById("hrs").textContent = Math.floor(hrsleft);
   document.getElementById("mins").textContent = Math.floor(minsleft);
   document.getElementById("secs").textContent = Math.floor(secsleft);
}
 
window.alert("Welcome to Tulsa");
