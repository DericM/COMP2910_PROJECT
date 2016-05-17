/**
 * Created by Deric on 2016-05-16.
 */

function Login() {

    this.login = document.createElement("div");
    this.login.id = "login-page";
    this.login.class = "page";

    //build
    var title = document.createElement("h1");
    title.id = "login-title";
    title.innerHTML = "Login";


    var form = document.createElement("form");
    form.id = "login-form";
    form.name = "login";

    var username = document.createElement("input");
    username.id = "login-input-username";
    username.type = "text";
    username.name = "username";
    username.placeholder = "User Name";

    var password = document.createElement("input");
    password.id = "login-input-password";
    password.type = "password";
    password.name = "password";
    password.placeholder = "Password";

    var submit = document.createElement("input");
    submit.id = "login-button-login";
    submit.type = "button";
    submit.value = "Login";
    submit.onclick = function(){
        //check(this.form);
    };

    var register = document.createElement("a");
    register.id = "login-button-register";
    register.innerHTML = "Register";
    register.onclick = function(){

    };



    this.login.appendChild(title);

    form.appendChild(username);
    form.appendChild(password);
    form.appendChild(submit);

    this.login.appendChild(form);
    this.login.appendChild(register);



    /*

     $(document).ready(function () {
     $('#myform').on('submit', function(e) {
     e.preventDefault();
     $.ajax({
     url : $(this).attr('action') || window.location.pathname,
     type: "GET",
     data: $(this).serialize(),
     success: function (data) {
     $("#form_output").html(data);
     },
     error: function (jXHR, textStatus, errorThrown) {
     alert(errorThrown);
     }
     });
     });
     });

     */

}


Login.prototype = {

    setVisibility: function(visibility){
        var container = document.getElementById("container");
        if(visibility == true){
            container.appendChild(this.login);
        }
        else {
            container.removeChild(this.login);
        }
    }
};