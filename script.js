// chapter 86- Form validation : email

// function to restrict user from using spaces 
function validateEmail() {
    var flag = true;
    var email = document.getElementById("email").value;
    if (email.indexOf(" ") !== -1){
        flag = false;
    }
    if (email.indexOf("@") < 1 || email.indexOf("@") > email.length - 6) {
        flag = false;
    }
    if (email.indexOf(".") > email.length - 3) {
        flag = false;
   }
    if (flag === false) {
        alert("please enter a valid email");
        return false; 
    }
   

}




 