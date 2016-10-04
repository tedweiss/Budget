var post_data = {};

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

    //everything looks good! proceed...
    if (proceed) {
        getValues();
    }
}

// Get the values from the form
function getValues() {
    var myForm = document.getElementById("form");
    var inputs = myForm.getElementsByTagName("input");
    var selects = myForm.getElementsByTagName("select");
    var textareas = myForm.getElementsByTagName("textarea");
    var i, inputName, inputValue, selectName, selectValue, textareaName, textareaValue;
    // Input values
    for (i = 0; i < inputs.length; i++) {
        inputName = inputs[i].name;
        inputValue = inputs[i].value;
        post_data[inputName] = inputValue;
    }
    // Select values
    for (i = 0; i < selects.length; i++) {
        // Selects that are not "subcategory"
        if (selects[i].name !== "subcategory") {
            selectName = selects[i].name;
            selectValue = selects[i].value;
            post_data[selectName] = selectValue;
        }
        // Selects that are "subcategory"
        if (selects[i].name === "subcategory" && selects[i].style.display === "block") {
            selectName = selects[i].name;
            selectValue = selects[i].value;
            post_data[selectName] = selectValue;
        }
    }
    // Textarea values
    for (i = 0; i < textareas.length; i++) {
        textareaName = textareas[i].name;
        textareaValue = textareas[i].value;
        post_data[textareaName] = textareaValue;
    }
    consoleLog();
}

// Show data to be sent to backend
function consoleLog() {
    var str = JSON.stringify(post_data);
    console.dir("JSON: " + str);
}
