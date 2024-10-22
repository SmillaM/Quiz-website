function validateUserInput () {
    const firstName = document.getElementById("first-name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const homes = document.querySelector('input[name="homes"]:checked');
    const names = document.querySelectorAll('input[name="names"]:checked');
    const snacks = document.querySelector('input[name="snacks"]:checked');
    const jobs = document.querySelectorAll('input[name="jobs"]:checked');
    const resa = document.getElementById("resa").value;

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
        homesError.textContent = "Välj ett svar om var Smilla inte har bott";
        isValid = false;
    }

    if (!snacks) {
        snacksError.textContent = "Välj vad Smilla tycker om väldigt mycket";
        isValid = false;
    }

    return isValid }