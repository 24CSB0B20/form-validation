const validateForm = () => {
    let favSelected = false;
    const form = document.forms["register"];
    const email = form["email"].value;
    const pass = form["pass"].value;
    const confPass = form["passConf"].value;
    const firstName = form["first"].value;
    const lastName = form["last"].value;
    const gender = form["Gender"].value;
    const area = form["choice"].value;
    const phone = form["number"].value;
    const dob = form["dob"].value;
    const address = form["addy"].value;
    const favorites = form["favs"];
    const error = document.getElementById("errorMessage");
    error.textContent = "";
    if(email == "" || pass == "" || confPass == "" || firstName == "" || lastName == "" || gender == "" || area == "" || phone == "" || dob == "" || address == ""){
        console.log("Email:", email);
        console.log("Password:", pass);
        console.log("Confirm Password:", confPass);
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Gender:", gender);
        console.log("Area:", area);
        console.log("Phone Number:", phone);
        console.log("Date of Birth:", dob);
        console.log("Address:", address);
        error.textContent = "Please fill out all fields";
        return false;
    }

    for(let i = 0; i < favorites.length; i++){
        if (favorites[i].checked) {
            favSelected = true;
            break;
        }
    }
    if(favSelected == false){
        error.textContent = "Please select at least 1 favourite";
        return false;
    }

    if(email.split("@")[1] != "student.nitw.ac.in"){
        error.textContent = "Only Students of NIT Warangal are allowed to register";
        return false;
    }
    if(pass != confPass){
        error.textContent = "Passwords do not match."
        return false;
    }


}