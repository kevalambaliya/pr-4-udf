function age() {
    let person_age = document.getElementById("num").value;
    let dob = new Date(person_age);

    if(person_age==null || person_age=='') {
      document.getElementById("msg").innerHTML;   
    } 
    else {

    let month = Date.now() - dob;

    let age_dt = new Date(month); 
   
    let year = age_dt.getUTCFullYear();

    let age = (year - 1970);

    return document.getElementById("ans").innerHTML =  
        "Age is: " + age + " years. ";
    }
}