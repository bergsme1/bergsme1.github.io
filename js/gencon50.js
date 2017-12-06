"use strict";

/*
   Javascript to generate a slideshow

<<<<<<< HEAD
    Adapted from w3schools HowTo Slideshow
=======
    Bones of the code taken from w3schools HowTo Slideshow
>>>>>>> origin/eliedits

   Filename: gencon50.js
	
*/

/*Grab all the images*/
<<<<<<< HEAD
var images = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.jpg","image8.jpg","image9.jpg"];
/*Create captions for the images*/
var caption = ["This special anniversary of GenCon completely sold out of badges. Waiting for the main exhibit halls to open the convention center was absolutely packed."
              ,"There were tons of games on display and being demo'd. Some were new releases, others were sneak peaks."
              ,"Throughout the whole weekend, nerdy performers took to the stage in several locations. This is one of the most popular bands that appear year after year: Klingons singing ballads (in Klingon, of course)."
              ,"The exhibits for the big name companies are always a blast. You can get an early look at upcoming games and have a blast with people of all interests. If you're lucky they even hand out nifty ribbons to stick to your badge!"
              ,"Wandering the exhibit hall can feel confusing and overwhelming, but having your camera ready means you can remember to look up cool things you see after the event."
              ,"Keep your eyes peeled for your favorite IPs, you never know who might have decided to crank out a game this year."
              ,"To reel you in, companies swag up the place with gorgeous pieces of art and all sorts of eye grabbers."
              ,"The gaming hall is packed with enormous tables that allow minuatures games to take on a truly expansive scope. This was a lovely one that pitted Dutch trading vessels and British Navy against Pirates of the Caribbean."
              ,"Every year Lone Shark Games puts together a series of tricky puzzles that are scattered throughout the entire convention. Die hard puzzle crackers work in teams to figure these out in a matter of hours. For the rest of us, it's just something fun to work on during off times."];

var slideshowHTML = "<div class = 'slideshow-container'>";

/*Create the slides*/
=======

var images = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.jpg","image8.jpg","image9.jpg"];

var slideshowHTML = "<div class = 'slideshow-container'>";
        
>>>>>>> origin/eliedits
for (var i = 0; i < images.length; i++)
{
    var j = i + 1;
    slideshowHTML += "<div class='mySlides'>";
    slideshowHTML += "<div class='numbertext'>" + j + "/" + images.length + "</div>";
<<<<<<< HEAD
    slideshowHTML += "<image src='../img/gencon50/" + images[i] + "' style='width:100%;'>";
    slideshowHTML += "</div>";
}

/*Create Prev button*/
slideshowHTML += "<a class='prev' onclick='plusSlides(-1)'>&#10094;</a>";
/*Create Next button*/
slideshowHTML += "<a class='next' onclick='plusSlides(1)'>&#10095;</a>";

=======
    slideshowHTML += "<image src='../img/gencon50/" + images[i] + "' style='width:100%'>";
    slideshowHTML += "</div>";
}

slideshowHTML += "<a class='prev' onclick='plusSlides(-1)'>&#10094;</a>";
slideshowHTML += "<a class='next' onclick='plusSlides(1)'>&#10095;</a>";
>>>>>>> origin/eliedits
slideshowHTML += "</div>";
slideshowHTML += "<br>";

slideshowHTML += "<div style='text-align:center'>";
<<<<<<< HEAD

/*Create dots to navigate slideshow*/
=======
>>>>>>> origin/eliedits
for (var i = 0; i < images.length; i++)
{
    var j = i +1;
    slideshowHTML += "<span class='dot' onclick='currentSlide(" + j + ")'></span>";
}

<<<<<<< HEAD
/*Create captions for images*/
for (var i = 0; i < images.length; i++)
{
    slideshowHTML += "<div class='text'>" + caption[i] + "</div>";
}

=======
>>>>>>> origin/eliedits
slideshowHTML += "</div>";

document.getElementById("slideshow").innerHTML = slideshowHTML;

/*Make the slideshow work*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
<<<<<<< HEAD
    var captions = document.getElementsByClassName("text");
=======
>>>>>>> origin/eliedits
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
<<<<<<< HEAD
        captions[i].style.display = "none";
=======
>>>>>>> origin/eliedits
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
<<<<<<< HEAD
    captions[slideIndex-1].style.display = "block";
=======
>>>>>>> origin/eliedits
    dots[slideIndex-1].className += " active";
}