"use strict";

/*
   Javascript to generate a slideshow

    Bones of the code taken from w3schools HowTo Slideshow

   Filename: gencon50.js
	
*/

/*Grab all the images*/

var images = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg","image7.jpg","image8.jpg","image9.jpg"];

var slideshowHTML = "<div class = 'slideshow-container'>";
        
for (var i = 0; i < images.length; i++)
{
    var j = i + 1;
    slideshowHTML += "<div class='mySlides'>";
    slideshowHTML += "<div class='numbertext'>" + j + "/" + images.length + "</div>";
    slideshowHTML += "<image src='../img/gencon50/" + images[i] + "' style='width:100%'>";
    slideshowHTML += "</div>";
}

slideshowHTML += "<a class='prev' onclick='plusSlides(-1)'>&#10094;</a>";
slideshowHTML += "<a class='next' onclick='plusSlides(1)'>&#10095;</a>";
slideshowHTML += "</div>";
slideshowHTML += "<br>";

slideshowHTML += "<div style='text-align:center'>";
for (var i = 0; i < images.length; i++)
{
    var j = i +1;
    slideshowHTML += "<span class='dot' onclick='currentSlide(" + j + ")'></span>";
}

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
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}