/**
 * Created by Deric on 2016-05-17.
 */

function Register() {

    this.register = document.createElement("div");
    this.register.id = "register-page";
    this.register.class = "page";

    //build
    var title = document.createElement("h1");
    title.id = "register-title";
    title.innerHTML = "Register";


    var form = document.createElement("form");
    form.id = "register-form";
    form.name = "register";

    var username = document.createElement("input");
    username.id = "register-input-username";
    username.type = "text";
    username.name = "username";
    username.placeholder = "User Name";

    var password = document.createElement("input");
    password.id = "register-input-password";
    password.type = "password";
    password.name = "password";
    password.placeholder = "Password";

    var submit = document.createElement("input");
    submit.id = "register-button-register";
    submit.type = "button";
    submit.value = "Register";
    submit.onclick = "check(this.form)";


    this.register.appendChild(title);

    form.appendChild(username);
    form.appendChild(password);
    form.appendChild(submit);

    this.register.appendChild(form);



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


Register.prototype = {

    setVisibility: function(visibility){
        var container = document.getElementById("container");
        if(visibility == true){
            container.appendChild(this.register);
        }
        else {
            container.removeChild(this.register);
        }
    }
};