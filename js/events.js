"use strict";

/*
            Brandon Eadie and Eli Bergsma
            Date: 9/12/17
            Instructor: John Kinuthia
            80736.201708(ISYS-288-AGA-Fall 2017)
        
            Final Project website for game store.

This styles the events table so that the days are accurate to their numbers.
	
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