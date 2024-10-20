1. To ensure that the user can only enter letters in the first name and surname fields, and the correct format for email, I declared a Regex variable. I found a template for this online. 
To show error messages I added <span> under each input field to make them appear later with JavaScript.
I wanted the input fields for first name, surname and email to be lined up horisontally, but the error messages to be displayed under each field. This was a bit tricky since the input fields required flex-direction: row and error flex-direction: column. 
I realized that my email regex wasn't fully adequate since I managed to sumbit invalid email adresses. So I looked up a more specifik one and replaced my existing with it. 
