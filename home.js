let firstname = "firstname";
let lastname = "lastname";

function dispName()
{
    firstname = document.getElementById("fname").value;
    lastname = document.getElementById("lname").value;
    document.getElementById("nameshower").innerHTML=firstname+" "+lastname;
}

function dispSex()
{
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    if (female)
    {
        document.getElementById("sexshower").innerHTML = "Girl";
        document.getElementById("seximage").setAttribute("src","AZULA.jpg")
    }
    if (male)
    {
        document.getElementById("sexshower").innerHTML = "BOY";
        document.getElementById("seximage").setAttribute("src","ChickenGame.jpg")
    }
}