let form = document.querySelector("form");


let previousData = {};

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let firstname = document.querySelector(".firstname").value.trim();
    let lastname = document.querySelector(".lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value.trim();

    if (
        firstname === previousData.firstname &&
        lastname === previousData.lastname &&
        email === previousData.email &&
        pass === previousData.pass
    ) {
        alert("Error: Aap same data dobara enter nahi kar sakte!");
        return;
    }

    previousData = { firstname, lastname, email, pass };

    alert("Form has been submitted successfully!");

    //clear fields after submission

    document.querySelector(".firstname").value="";
    document.querySelector(".lastname").value="";
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
});
