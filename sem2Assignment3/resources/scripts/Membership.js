var Pass;
var errPass;
var PassCon;
var errPassCon;
var Email;
var errEmail;
var PostCode;
var errPostCode;
var Prov;
var errProv;

var FName;
var errFName;
var LName;
var errLName;
var Age;
var errAge;
var Address;
var errAddress;
var City;
var errCity

function getInputs(){
   
    FName = document.getElementById("txtFName");
    errFName = document.getElementById("errFName");

    LName = document.getElementById("txtLName");
    errLName = document.getElementById("errLName");

    Age = document.getElementById("txtAge");
    errAge = document.getElementById("errAge");

    Address = document.getElementById("txtAddress");
    errAddress = document.getElementById("errAddress");

    City = document.getElementById("txtCity");
    errCity = document.getElementById("errCity");

    Prov = document.getElementById("lstProv");
    errProv = document.getElementById("errProv");
    
    PostCode = document.getElementById("txtPostCode");
    errPostCode = document.getElementById("errPostCode");

    Email = document.getElementById("txtEmail");
    errEmail = document.getElementById("errEmail");
    
    Pass = document.getElementById("txtPass");
    errPass = document.getElementById("errPass");

    PassCon = document.getElementById("txtPassCon");
    errPassCon = document.getElementById("errPassCon");
}

function Validate(){

    getInputs();

    // CHECK FIRST NAME
    if (ifEmpty(FName.value) === "") {
        errFName.classList.add("d-none");
        FName.classList.remove("uk-form-danger");
    } else {
        FName.classList.add("uk-form-danger");
        errFName.classList.remove("d-none");
        errFName.innerHTML = ifEmpty(FName.value);
    }

    // CHECK LAST NAME
    if (ifEmpty(LName.value) === "") {
        errLName.classList.add("d-none");
        LName.classList.remove("uk-form-danger");
    } else {
        LName.classList.add("uk-form-danger");
        errLName.classList.remove("d-none");
        errLName.innerHTML = ifEmpty(LName.value);
    }

    // CHECK AGE
    if (checkAge(Age.value) === "") {
        errAge.classList.add("d-none");
        Age.classList.remove("uk-form-danger");
    } else {
        Age.classList.add("uk-form-danger");
        errAge.classList.remove("d-none");
        errAge.innerHTML = ifEmpty(Age.value);
    }

    // CHECK PROV
    if (ifEmpty(Prov.value) === "") {
        errProv.classList.add("d-none");
        Prov.classList.remove("uk-form-danger");
    } else {
        Prov.classList.add("uk-form-danger");
        errProv.classList.remove("d-none");
        errProv.innerHTML = ifEmpty(Prov.value);
    }

    // CHECK ADDRESS
    if (ifEmpty(Address.value) === "") {
        errAddress.classList.add("d-none");
        Address.classList.remove("uk-form-danger");
    } else {
        Address.classList.add("uk-form-danger");
        errAddress.classList.remove("d-none");
        errAddress.innerHTML = ifEmpty(Address.value);
    }

    // CHECK CITY
    if (ifEmpty(City.value) === "") {
        errCity.classList.add("d-none");
        City.classList.remove("uk-form-danger");
    } else {
        City.classList.add("uk-form-danger");
        errCity.classList.remove("d-none");
        errCity.innerHTML = ifEmpty(City.value);
    }

    // CHECK PROV
    if (ifEmpty(Prov.value) === "") {
        errProv.classList.add("d-none");
        Prov.classList.remove("uk-form-danger");
    } else {
        Prov.classList.add("uk-form-danger");
        errProv.classList.remove("d-none");
        errProv.innerHTML = ifEmpty(Prov.value);
    }
    
    // CHECKS ZIP CODE
    if (checkZipCode(PostCode.value) === "") {
        errPostCode.classList.add("d-none");
        PostCode.classList.remove("uk-form-danger");
    } else {
        PostCode.classList.add("uk-form-danger");
        errPostCode.classList.remove("d-none");
        errPostCode.innerHTML = checkZipCode(PostCode.value);
    }    
    
    // CHECKS EMAIL
    if (checkEmail(Email.value) === "") {
        errEmail.classList.add("d-none");
        Email.classList.remove("uk-form-danger");
        
    } else {
        Email.classList.add("uk-form-danger");
        errEmail.classList.remove("d-none");
        errEmail.innerHTML = checkPassCon(Email.value);
    }

    // CHECKS PASSWORD
    if (checkPass(Pass.value) === "") {
        errPass.classList.add("d-none");
        Pass.classList.remove("uk-form-danger")
    } else{
        Pass.classList.add("uk-form-danger");
        errPass.classList.remove("d-none");
        errPass.innerHTML = checkPass(Pass.value);
    }

    // CHECKS PASSWORD CONFIRM
    if (checkPassCon().length === 0) {
        errPassCon.classList.add("d-none");
        PassCon.classList.remove("uk-form-danger");
    } else {
        PassCon.classList.add("uk-form-danger");
        errPassCon.classList.remove("d-none");
        errPassCon.innerHTML = checkPassCon();
    }  
}

function ifEmpty(value){
    try {
        if (value === "") {
            throw "This field cannot be empty\n";
        } else{
            return ""
        }
    } catch (err) {
        return err;
    }
}

function checkPass(value){
    
    var ErrString = "";
    var checkLowerCase = new RegExp("[a-z]"); 
    var checkUpperCase = new RegExp("[A-Z]");
    var checkNums = new RegExp("[0-9]");
    var checkSpecChars = new RegExp("[!@#\$%\^&\*]");
    var checkLength = new RegExp(".{6,}");

    try {
        if (checkUpperCase.test(value) === false) {
            throw "Password must contain upper case letter<br>";
        }
    } catch (err) {
        ErrString += err;
    }
    
    try {
        if (checkLowerCase.test(value) === false) {
            throw "Password must contain lower case letter<br>";
        }
    } catch (err) {
        ErrString += err;
    }
    
    try {
        if (checkNums.test(value) === false) {
            throw "Password must contain a number<br>";
        }
    } catch (err) {
        ErrString += err;
    }

    try {
        if (checkSpecChars.test(value) === false) {
            throw "Password must contain a special character<br>";
        }
    } catch (err) {
        ErrString += err;
    }

    try {
        if (checkLength.test(value) === false) {
            throw "Password must be six characters long<br>";
        }
    } catch (err) {
        ErrString += err;
    }

    return ErrString;
}

function checkPassCon(){
    var ErrString = "";

    if (PassCon.value !== Pass.value) {
        ErrString += "Must match Password<br>";
    }

    ErrString += ifEmpty(PassCon.value);

    return ErrString;
}

function checkEmail(value) {
    var ErrString = "";
    
    try {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false) {
            throw "Invalid Email"
        }
    } catch (err) {
        ErrString += err;
    }

    ErrString += ifEmpty(value);

    return ErrString;
}

function checkZipCode(value){
    var ErrString = "";
    var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);

    try {
        if (ca.test(value) === false) {
            throw "Invalid Zip Code<br>";
        }
    } catch (err) {
        ErrString += err;
    }

    ErrString += ifEmpty(value);

    return ErrString;
}

function checkAge(value){
    var ErrString = "";

    try {
        if (value < 18) {
            throw "Must be 18 and above";
        } 
    } catch (err) {
        ErrString += err;
    }

    ErrString += ifEmpty(value);

    return ErrString;
}

function Reset(){
    FName.classList.remove("uk-form-danger")
    errFName.classList.add("d-none")

    LName.classList.remove("uk-form-danger")
    errLName.classList.add("d-none")

    Age.classList.remove("uk-form-danger")
    errAge.classList.add("d-none")

    Address.classList.remove("uk-form-danger")
    errAddress.classList.add("d-none")

    City.classList.remove("uk-form-danger")
    errCity.classList.add("d-none")

    Prov.classList.remove("uk-form-danger")
    errProv.classList.add("d-none")
    
    PostCode.classList.remove("uk-form-danger")
    errPostCode.classList.add("d-none")

    Email.classList.remove("uk-form-danger")
    errEmail.classList.add("d-none")
    
    Pass.classList.remove("uk-form-danger")
    errPass.classList.add("d-none")

    PassCon.classList.remove("uk-form-danger")
    errPassCon.classList.add("d-none")
}