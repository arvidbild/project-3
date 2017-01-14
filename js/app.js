//Global variabels
var jobRole = document.getElementById("title");
var design = document.getElementById("design");
var designlabel = document.querySelectorAll("label")[5];
var color = document.getElementById("color");
var activities = document.getElementsByClassName("activities")[0];
var button = document.querySelector("button");
var nameField = document.getElementById("name");
var email = document.getElementById("mail");
var checkboxes = document.querySelectorAll(".activities input");
var payment = document.getElementById("payment");
var creditcard = document.getElementById("credit-card");
var paypal = document.getElementsByTagName("p")[0];
var bitcoin = document.getElementsByTagName("p")[1];  
var ccnum = document.getElementById("cc-num");
var zip = document.getElementById("zip");
var cvv = document.getElementById("cvv");

//Function for the Jobrole.

function function1() {

var title = document.getElementById("title");
var input = document.createElement("input");
var label = document.createElement("label");   

input.setAttribute("id","other-title");
label.innerHTML = "Your Job Role"; 
        
    if (jobRole.value == "other") { 
        
        title.parentNode.appendChild(label);     
        title.parentNode.appendChild(input);   
    }
    
}
                         
//Function for the T-shirts
function function2() {
        
color.style.display = "inline";
designlabel.style.display = "block";    
    
    if(design.value === "js puns") {
        for (var i = 0; i < color.length; i++) {
            color[i].style.display = "inline"
            }  
        for (var i = 3; i < color.length; i++) {
            color[i].style.display = "none"
            }        
        }
     
    if (design.value === "heart js") {
        for (var i = 0; i < color.length; i++) {
            color[i].style.display = "inline"
            }  
        for (var i = 0; i < 3; i++) {
            color[i].style.display = "none";        
            } 
        } 

    if (design.value === "Select Theme") {
        color.style.display = "none";
        designlabel.style.display = "none";
        }
}


//Function for Activities.
function function3 () {
    
    var all = document.querySelector("input[name = 'all']");
    var jsFrameworks = document.querySelector("input[name = 'js-frameworks']");
    var jsLibs = document.querySelector("input[name = 'js-libs']");
    var express = document.querySelector("input[name='express']");
    var nodevariable = document.querySelector("input[name = 'node']");
    var buildTools = document.querySelector("input[name='build-tools']");
    var npm = document.querySelector("input[name = 'npm']");
    
    var totalcost = 0; 
    var div = document.createElement("div");
    div.setAttribute("id","totalcost");
    activities.appendChild(div);

    
    // if mainConference ceckbox is selected
    if (all.checked === true) {
    totalcost += 200; 
    }
    if (buildTools.checked === true) {
    totalcost += 100; 
    }
    if (npm.checked === true) {
    totalcost += 100; 
    }
    
    // if a checkbox is checked disable the conflicts checkbokxes
    if (jsFrameworks.checked === true) {
    express.disabled = true;
    totalcost += 100;
        
    } else if (express.checked === true) {
    jsFrameworks.disabled = true;
    totalcost += 100;
    } 
     
    if (jsLibs.checked === true) {
    nodevariable.disabled = true;
    totalcost += 100;
    
    } else if (nodevariable.checked === true) {
    jsLibs.disabled = true;
    totalcost += 100;
    } 
    
    document.getElementById("totalcost").innerHTML = totalcost;
    
    //if a checkbox is unchecked enable the others
    if (jsFrameworks.checked === false) {
        express.disabled = false; 
    }
    
    if (express.checked === false) {
        jsFrameworks.disabled = false; 
    }
     if (jsLibs.checked === false) {
        nodevariable.disabled = false; 
    }
     if (nodevariable.checked === false) {
        jsLibs.disabled = false; 
    } 
        
};

//function for payments
function function4() {

    if (payment.value == "credit card" ) {
        creditcard.style.display = "block";
        paypal.style.display = "none";
        bitcoin.style.display = "none";
        
        } else if (payment.value =="paypal") {
        paypal.style.display = "block";
        creditcard.style.display = "none";
        bitcoin.style.display = "none";   
        
        } else if (payment.value == "bitcoin") {
        bitcoin.style.display = "block";
        creditcard.style.display = "none";
        paypal.style.display = "none";    
        
        } else if (payment.value == "select_method") {
        bitcoin.style.display = "none";
        creditcard.style.display = "none";
        paypal.style.display = "none";     
        }
        
    }

/* Credit card field should only accept a number between 13 and 16 digits

The zipcode field should accept a 5-digit number
The CVV should only accept a number that is exactly 3 digits long
*/

// function looping thrue to find if activities is clicked
function validateactivity () {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }    
    }
}

//Function for validation
function function5(event) {
    
    if (nameField.value < 1) {
        event.preventDefault();
        alert("You have to fill out the name field");
    }
    
    if (!email.value.includes("@") || !email.value.includes("."))  {
        event.preventDefault();
        alert("Please enter a valid email adress");
    } 
    
    if (!validateactivity()) {
        event.preventDefault();
        alert("You have to chose a activity");
    }
    
    if (zip.value.length !== 5 && payment.value == "credit card") {
        event.preventDefault();
        alert("You have to put in 5 numbers as your ZIP-code");
        }
    
     if (cvv.value.length !== 3 && payment.value == "credit card" ) {
        event.preventDefault();
        alert("You have to put in 3 numbers as a CVV number");
        }
        
    if (ccnum.value.length >= 13 && ccnum.value.length <= 16) { 
        return event; 
    } else if (payment.value == "credit card") {
        event.preventDefault();
        alert("You have to put in between 13 and 16 numbers as your card numberr");
        }
}
/// Eventlisteners 

jobRole.addEventListener("change",function1);
design.addEventListener("change",function2);
activities.addEventListener("change",function3);
payment.addEventListener("change",function4);
button.addEventListener("click",function5);
 
color.style.display = "none";
designlabel.style.display = "none";
bitcoin.style.display = "none";
creditcard.style.display = "none";
paypal.style.display = "none";    

