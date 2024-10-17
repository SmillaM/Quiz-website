function validateUserInput () {
    const firstName = document.getElementById("first-name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    const firstNameError = document.getElementById("first-name-error");
    const surnameError = document.getElementById("surname-error");
    const emailError = document.getElementById("email-error");

    let isValid = true;

    if (!nameRegex.test(firstName)) {
        firstNameError.textContent = "Förnamn ska endast innehålla bokstäver";
        isValid = false;
    }

    if (!nameRegex.test(surname)) {
        surnameError.textContent = "Efternamn ska endast innehålla bokstäver";
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        emailError.textContent = "Ange en giltig e-postadress";
        isValid = false;
    }

    return isValid;
}