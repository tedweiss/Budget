// Shows the corresponding subcategory when the main category is selected
function showSubcategory(subcat) {
    subcat = subcat.value;
    var subcategory = document.getElementById('subcategory');
    var subSelects = subcategory.getElementsByTagName('select');
    for (var i = 0; i < subSelects.length; i++) {
        subSelects[i].style.display = "none";
        subSelects[i].setAttribute("class", "");
    }
    var subcatCurrent = document.getElementById(subcat);
    subcatCurrent.style.display = "block";
    var category = document.getElementById('category');
    // mark fields as valid when selected
    category.setAttribute("class", "valid success-bg");
    subcatCurrent.setAttribute("class", "valid success-bg");
}

// Event Listeners onblur and onfocus
var form = document.getElementById("form");
form.addEventListener("focus", function(event) {
    event.target.removeAttribute("style");
    event.target.style.display = "block";
    event.target.setAttribute("class", "focus");
}, true);

form.addEventListener("blur", function(event) {
    checkNotRequiredNotEmpty();
    checkNotRequiredEmpty();
    checkRequiredNotEmpty();
    checkRequiredEmpty();
}, true);

function checkNotRequiredNotEmpty() {
    if (event.target.required === false && event.target.value !== "") {
        event.target.setAttribute("class", "valid success-bg");
    }
}

function checkNotRequiredEmpty() {
    if (event.target.required === false && event.target.value === "") {
        event.target.setAttribute("class", "initial");
    }
}

function checkRequiredNotEmpty() {
    if (event.target.required === true && event.target.value !== "") {
        event.target.setAttribute("class", "valid success-bg");
    }
}

function checkRequiredEmpty() {
    if (event.target.required === true && event.target.value === "") {
        event.target.setAttribute("class", "invalid error-bg");
    }
}

// Front end form validation on click
var inputs = document.getElementsByTagName("input");
var selects = document.getElementsByTagName("select");
var reply = document.getElementById("results");
var replied = "<div style='color: red'>Please fill in all required fields.</div>";

function checkValues() {

    var proceed = true;

    function checkInputs() {
        for (var i = 0; i < inputs.length; i++) {
            if ((inputs[i].required === true && inputs[i].value === "") > 0) {
                if (inputs[i].required === true && inputs[i].value === "") {
                    inputs[i].style.border = "2px solid red";
                    reply.innerHTML = replied;
                    proceed = false;
                }
            }
        }
    }

    function checkSelects() {
        for (var i = 0; i < selects.length; i++) {
            if ((selects[i].required === true && selects[i].value === "") > 0) {
                console.log("selects required " + i + ": " + selects[i].name);
                if (selects[i].required === true && selects[i].value === "") {
                    selects[i].style.border = "2px solid red";
                    reply.innerHTML = replied;
                    proceed = false;
                }
            }
        }
    }

    // run the checks for required data

    checkInputs();
    checkSelects();

    // end form validation on click

}