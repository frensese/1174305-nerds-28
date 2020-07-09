var contacts = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".button-close");

var form = popup.querySelector("form");
var firstName = popup.querySelector("[name=first-name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

var storageName = localStorage.getItem("firstName");
var storageEmail = localStorage.getItem("email");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

contacts.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("feedback-show");

    if (storageEmail) {
        if (storageName) {
            firstName.value = storageName;
            email.focus();
        }
       email.value = storageEmail;
       message.focus();
    } else {
        firstName.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("madal-error");
    popup.classList.remove("feedback-show");
});

form.addEventListener("submit", function (evt) {
    if (!firstName.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error"); 
    } else {
        if (isStorageSupport) {
            localStorage.setItem ("firstName", firstName.value); 
            localStorage.setItem ("email", email.value); 
        }
    }
});

try {
    storageName = localStorage.getItem("firstName");
} 
catch (err) {
    isStorageSupport = false;
};

try {
    storageEmail = localStorage.getItem("email");
} 
catch (err) {
    isStorageSupport = false;
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("feedback-show")) {
        evt.preventDefault();
        popup.classList.remove("feedback-show");
        popup.classList.remove("modal-error");
        }
    }
});