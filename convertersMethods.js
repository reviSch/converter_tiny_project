/**
 * Created by רויטל on 30/07/2017.
 */

function milesAndKm() {

    var miles = document.getElementById("miles").value; //get number entered in "miles" input
    var km =  document.getElementById("km").value; //get number entered in "km" input

    if(miles<0 || km<0 ) //if numbers are 0 or -
    {
        alert("please enter a valid number");
    }

    else{
        if (miles > 0)
        {
            document.getElementById("km").value = miles * 1.609344;
        }

        else if(km > 0)
        {
            document.getElementById("miles").value= km * 0.621371192;
        }
    }
}

function inchAndCm() {

    var inch = document.getElementById("inch").value; //get number entered in "inch" input
    var cm =  document.getElementById("cm").value; //get number entered in "cm" input

    if(inch<0 || cm<0) //if numbers are 0 or -
    {
        alert("please enter a valid number");
    }

    else{
        if (inch > 0)
        {
            document.getElementById("cm").value = inch * 2.54;
        }

        else if(cm > 0)
        {
            document.getElementById("inch").value= cm * 0.393700787;
        }
    }
}

function fahrAndCels() {

    var fahr = document.getElementById("fahr").value; //get number entered in "fahr" input
    var cels =  document.getElementById("cels").value; //get number entered in "cels" input


        if (fahr || null)
        {
            document.getElementById("cels").value = (5 * ( fahr -32 ) ) / 9;
        }

        else if(cels || null)
        {
            document.getElementById("fahr").value= ( 9 * cels) / 5 + 32;
        }
    }

    function clear() {
        document.getElementById("*").value = "";
    }