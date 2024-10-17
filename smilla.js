function validateUserInput () {
    const firstName = document.getElementById("first-name").value;
    const surname = document.getElementById("surname").value;
    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(firstName)) {
        alert("Förnamn ska endast innehålla bokstäver");
        return false;
    }

    if (!nameRegex.test(lastName)) {
        alert("Efternamn ska endast innehålla bokstäver");
        return false;
    }

    return true;
}