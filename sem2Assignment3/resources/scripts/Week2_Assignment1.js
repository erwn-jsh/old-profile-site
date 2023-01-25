var gender = null;
var age = null;

//  BEGIN SECTION
//  IMPERIAL BMI
//

//  FOR IMPERIAL MEASUREMENTS
var impFeet = null;
var impInches = null;

var impStones = null;
var impPounds = null;

var impActLevel = null;

var impBMIResults = null;
var impEnergyIntake = null;


$("#btnCalImpBMI").submit(function(e) {
    e.preventDefault();
});

function calculateImpBMI(){
    //console.log("works");
    getImpInput();
    impBMIResults= getImpBMI();
    impEnergyIntake = getImpEnergyExpend();
    //console.log(impBMIResults);
    //console.log(impEnergyIntake);
    outputImpBMI();
    clearImpControls();
}

function getImpInput(){
    gender = $("#optImpGender").val();
    // gender = document.getElementById("optImpGender").val();
    age = $("#txtImpAge").val();
    
    impFeet = $("#txtFeet").val();
    impInches = $("#txtInches").val();
    
    impStones = $("#txtStones").val()
    impPounds = $("#txtPounds").val()

    impActLevel = $('input[name="opImpActLevel"]:checked').val();
}

function getImpBMI(){
    
    var results = null;

    pounds = conStonesToPounds();
    weight = pounds + impPounds;

    inches = conFeetToInches();
    height = inches + impFeet;

    if(gender === "Male")
    {
        results = 66 + (6.2 * weight) + (12.7 * height) - (6.76 * age);
        //results /= 440;
        return results;
    }
    if(gender === "Female")
    {   
        results = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
        return results;
    }
}

function conStonesToPounds(){
    return impStones * 14;
}

function conFeetToInches(){
    return impFeet * 12;
}

function outputImpBMI(){
    $("#txtImpBMIResults").val(impBMIResults);
    $("#txtImpEnerExpResults").val(impEnergyIntake);
}

function getImpEnergyExpend(){
    if(impActLevel === "Sed"){
        return impBMIResults * 1.53;
    }
    
    if(impActLevel === "ModAct"){
        return impBMIResults * 1.76;
    }

    if(impActLevel === "VigAct"){
        return impBMIResults * 2.25;
    }
}

function clearImpControls(){
    $("#optImpGender").val('Male');
    $("#txtImpAge").val('0');
    
    $("#txtFeet").val('0');
    $("#txtInches").val('0');

    $("#txtStones").val('0');
    $("#txtPounds").val('0');

    $(".opImpActLevel").prop('checked', false);

    gender = null;
    age = null;

    impFeet = null;
    impInches = null;

    impStones = null;
    impPounds = null;

    impActLevel = null;

    impBMIResults = null;
    impEnergyIntake = null;
}

//  END SECTION
//  IMPERIAL BMI
//

//  BEGIN SECTION
//  METRIC BMI
//

//  FOR METRIC MEASUREMENTS
var metCm = null;

var metKilos = null;

var metActLevel = null;

var metBMIResults = null;
var metEnergyIntake = null;


function calculateMetBMI(){
    getMetInput();
    metBMIResults= getMetBMI();
    metEnergyIntake = getMetEnergyExpend();
    console.log(metBMIResults);
    console.log(metEnergyIntake);
    outputMetBMI();
    clearMetControls();
}

function getMetInput(){
    gender = $("#optMetGender").val();
    age = $("#txtMetAge").val();

    metCm = $("#txtCm").val();
    metKilos = $("#txtKilos").val();

    metActLevel = $('input[name="opMetActLevel"]:checked').val();
}

function getMetBMI(){
    var results;
    
    if(gender === "Male"){
        return results = (10 * metKilos) + (6.25 * metCm) - (5 * age) + 5;
    }

    if(gender === "Female"){
        return results = (10 * metKilos) + (6.25 * metCm) - (5 * age) - 161;
    }
}

function getMetEnergyExpend(){
    if(metActLevel === "Sed"){
        return metBMIResults * 1.53;
    }
    
    if(metActLevel === "ModAct"){
        return metBMIResults * 1.76;
    }

    if(metActLevel === "VigAct"){
        return metBMIResults * 2.25;
    }
}

function outputMetBMI(){
    $("#txtMetBMIResults").val(metBMIResults);
    $("#txtMetEnerExpResults").val(metEnergyIntake);
}

function clearMetControls(){
    $("#optMetGender").val('Male');
    $("#txtMetAge").val('0');

    $("#txtCm").val('0');
    $("#txtKilos").val('0');

    $('input[name="opMetActLevel"]:checked').val();

    $(".opMetActLevel").prop('checked', false);

    metCm = null;

    metKilos = null;

    metActLevel = null;

    metBMIResults = null;
    metEnergyIntake = null;
}


//  END SECTION
//  METRIC BMI
//


