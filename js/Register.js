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
    form.className  = "form";
    form.id = "form-register";
    form.name = "register";

    var username = document.createElement("input");
    username.type = "text";
    username.name = "username";
    username.placeholder = "User Name";

    var password = document.createElement("input");
    password.type = "password";
    password.name = "password";
    password.placeholder = "Password";

    var confirm_password = document.createElement("input");
    confirm_password.type = "password";
    confirm_password.name = "password";
    confirm_password.placeholder = "Confirm";

    var submit = document.createElement("input");
    submit.type = "button";
    submit.value = "Register";
    submit.addEventListener('click', function(){
        var url = "php/create_account.php"; // the script where you handle the form input.

        $.ajax({
            type: "POST",
            url: url,
            data: $("#form-register").serialize(), // serializes the form's elements.
            success: function(data)
            {
                //data is the echo from create_account.php
                // data == 'success' || data=='failure'
                //if(data ==) // show response from the php script.
                alert(data);
            }

        });
        return false; // avoid to execute the actual submit of the form.
    });


    this.register.appendChild(title);

    form.appendChild(username);
    form.appendChild(password);
    form.appendChild(confirm_password);
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