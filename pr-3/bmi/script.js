function bmi(){
    let heightinput = document.getElementById("height").value;
    let weightinput = document.getElementById("weight").value;

    bmicalc(heightinput, weightinput);
}
function bmicalc(heightinput, weightinput){
    let bmi, height, weight, msg;

    height = heightinput;
    weight = weightinput;
    bmi = weight / height * height;

    if (bmi < 18.5) 
        {
            msg = "bmi is Underweight";
        }
         else if (bmi > 18.5 && bmi < 24.9) 
        {
            msg = "bmi is Normal weight";
        } 
        else if (bmi > 25 && bmi < 29.9) 
        {
            msg = "bmi is overweight";
        } 
        else if(bmi > 30)
        {
            msg = "bmi is Obesity";
        }
        else 
        {
            msg = "ERROR: Enter the correct data";
        }
    
        document.getElementById('ans').innerHTML = msg;
}