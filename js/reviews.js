"use strict";

/*
            Brandon Eadie and Eli Bergsma
            Date: 9/12/17
            Instructor: John Kinuthia
            80736.201708(ISYS-288-AGA-Fall 2017)
        
            Final Project website for game store.

    This will act as an array to allow links to game reviews be 
    generated on each page
   
   Filename:   reviews.js   
*/



var reviewName = new Array();
var reviewHTML = new Array();
reviewName[1] = "Inis";
reviewName[2] = "Talisman";
reviewName[3] = "Twilight Imperium";

reviewHTML[1] = "inis.html";
reviewHTML[2] = "talisman.html";
reviewHTML[3] = "ti3.html";


    var rowHTML = "<a href='html/";
    for(var i = 1; i <= reviewName.length-1; i++) {
        rowHTML += reviewHTML[i] + "'>" + reviewName[i] + "</a>";
    }

document.getElementById("dateNow").innerHTML = rowHTML;