/*
            Brandon Eadie and Eli Bergsma
            Date: 9/12/17
            Instructor: John Kinuthia
            80736.201708(ISYS-288-AGA-Fall 2017)
        
            Final Project website for game store.

    From:
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 7
   Case 4

   Purpose: The purpose of this program is to simply report on a
            successful completition of a valid Web form.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            student does not have to continually retype test values
            in the survey form.

   Additionally: this program contains the function to hide the custReviews element

*/

window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("No invalid data detected. Will retain data for further testing.");
      return false;
   }
}
        

function hideMe (box) {
    
    switch(box.checked) {
        case true: document.getElementById("form").style.width = '100%';
                   document.getElementById("custReviews").style.display = 'none';
                   break;
        case false: document.getElementById("form").style.width = '67%';
                    document.getElementById("custReviews").style.display = 'block';
                    break;
        default: alert("Quantum state detected");
    }
}