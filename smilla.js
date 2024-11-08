function validateUserInput() {
    const firstName = document.getElementById("first-name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const homes = document.querySelector('input[name="homes"]:checked');
    const snacks = document.getElementById("snacks").value;

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const firstNameError = document.getElementById("first-name-error");
    const surnameError = document.getElementById("surname-error");
    const emailError = document.getElementById("email-error");
    const homesError = document.getElementById("homes-error");
    const snacksError = document.getElementById("snacks-error");

    firstNameError.textContent = "";
    surnameError.textContent = "";
    emailError.textContent = "";
    homesError.textContent = "";
    snacksError.textContent = "";

    let isValid = true;

    if (!nameRegex.test(firstName)) {
        firstNameError.textContent = "Förnamn får endast innehålla bokstäver";
        isValid = false;
    }

    if (!nameRegex.test(surname)) {
        surnameError.textContent = "Efternamn får endast innehålla bokstäver";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        emailError.textContent = "Ange en giltig e-postadress";
        isValid = false;
    }

    if (!homes) {
        homesError.textContent = "Välj ett svar om var Smilla INTE har bott";
        isValid = false;
    }

    if (snacks === "") {
        snacksError.textContent = "Välj vad Smilla tycker om väldigt mycket";
        isValid = false;
    }

    if (resa === "") {
        snacksError.textContent = "Välj vad Smilla tycker om väldigt mycket";
        isValid = false;
    }

    return isValid;
}

document.getElementById("submit-button").addEventListener("click", function(event) {
    event.preventDefault();
    const successMessage = document.getElementById("success-message");
    successMessage.textContent = "";

    if (validateUserInput()) {
        successMessage.textContent = "Tack för att du gjorde quizet!";
    }
});



