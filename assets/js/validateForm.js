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
