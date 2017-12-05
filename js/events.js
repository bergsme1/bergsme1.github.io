"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1
   
   Filename: tc_cart.js
	
*/

var tableHTML = "<table class= 'schedule'><caption>Eastern Time</caption><colgroup><col class = 'dayCols' span = '7' /></colgroup><thead><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></thead><tbody>";

for (var i = 0; i < events.length; i++)
{
    if (i%7 === 0)
        tableHTML += "<tr>";
    tableHTML += "<td>" + days[i] + "</br>" + events[i] + "</td>";
    if (i%7 === 7)
        tableHTML += "</tr>";
}

tableHTML += "</tbody></table>";

document.getElementById("schedule").innerHTML = tableHTML;