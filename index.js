alert("WELCOME TO SHUBHASHREE'S WEBSITE")

function validate(){
    var username = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;

    if(username=="shubhashreepandit5@gmail.com" && password=="user"){

        alert("Login Successfully");
        return false;
    }
    else{
        alert("Login Failed !");
    }
}
