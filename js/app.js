//Global variabels
var jobRole = document.getElementById("title");
var design = document.getElementById("design");
var color = document.getElementById("color");
var activities = document.getElementsByClassName("activities")[0];
var button = document.querySelector("button");

var nameField = document.getElementById("name");
var checkboxes = document.querySelectorAll(".activities input");
var ccnum = document.getElementById("cc-num");
var zip = document.getElementById("zip");
var cvv = document.getElementById("cvv");

//Function for the Jobrole.

function function1() {

var title = document.getElementById("title");
var input = document.createElement("input");
var label = document.createElement("label");     
    
    if (jobRole.value == "other") { 
        
        title.parentNode.appendChild(label);     
        title.parentNode.appendChild(input);

        input.setAttribute("id","other-title");
        label.innerHTML = "Your Job Role";    
    }
}
                         
//Function for the T-shirts
function function2() {
    
    if(design.value == "js puns") {
        for (var i = 3; i < color.length; i++) {
            color[i].style.display = "none"
            }        

    } else if (design.value == "heart js") {
        for (var i = 0; i < 3; i++) {
            color[i].style.display = "none";        
        }
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

var payment = document.getElementById("payment");
var creditcard = document.getElementById("credit-card");
var paypal = document.getElementsByTagName("p")[0];
var bitcoin = document.getElementsByTagName("p")[1];    
    
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
        }
    }




/* Credit card field should only accept a number between 13 and 16 digits

The zipcode field should accept a 5-digit number
The CVV should only accept a number that is exactly 3 digits long
*/

// funvtion looping thrue to find if activities is clicked
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
        }
    if (!validateactivity()) {
        event.preventDefault();
    }
    if (ccnum.length >= 13 && ccnum.length <= 16) {
        return event;
    } else{
            event.preventDefault();
        }

}

/// Eventlisteners 

jobRole.addEventListener("change",function1);
design.addEventListener("change",function2);
activities.addEventListener("change",function3);
payment.addEventListener("change",function4);
button.addEventListener("click",function5);










