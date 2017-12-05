"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1
  
   Author: Sarah Nodheim
   Date:   2018-03-01
     
   Filename: tc_order.js  

   The item array contains the ID numbers of the items ordered by the customer
   The itemDescription array contains the description of each item
   The itemPrice array contains the price of each item
   The itemQty array contains the quantity ordered of each item
   
*/

var days = ["","","","","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
var events = ["",
              "",
              "",
              "",
              "6:00pm: Pokemon Tournament",
              "6:00pm: Board Game Night",
              "1:00pm: X-Wing League",
              "6:00pm: Old School Board Games",
              "6:00pm: VR try outs",
              "6:00pm: Board Game Night",
              "6:00pm: Final Fantasy Trading Cards Game",
              "6:00pm Star Wars Destiny",
              "5:00pm: Axis and Allies Open Play",
              "1:00pm: X-Wing League",
              "6:00pm: LCG/Deck Building Night",
              "6:00pm: Battletech Pods",
              "6:00pm: Warmachine Hordes",
              "6:00pm: Android Netrunner",
              "6:00pm: Pokemon Tournament",
              "6:00pm: Board Game Night",
              "1:00pm: X-Wing League",
              "6:00pm: Old School Board Games",
              "6:00pm: VR try outs",
              "6:00pm: Board Game Night",
              "6:00pm: Final Fantasy Trading Cards Game",
              "6:00pm Star Wars Destiny",
              "5:00pm: Axis and Allies Open Play",
              "Closed",
              "Closed",
              "BOGO 25% off</br>6:00pm: Battletech Pods",
              "6:00pm: Warmachine Hordes",
              "6:00pm: Android Netrunner",
              "6:00pm: Pokemon Tournament",
              "6:00pm: Board Game Night",
              "5:00pm All night gaming"];