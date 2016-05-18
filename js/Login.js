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

    var wrapper = document.createElement("div");
    wrapper.className  = "wrapper";
    wrapper.name = "login";

    var form = document.createElement("form");
    form.className  = "form";
    form.id = "form-login";
    form.name = "login";

    var username = document.createElement("input");
    username.type = "text";
    username.name = "username";
    username.placeholder = "User Name";

    var password = document.createElement("input");
    password.type = "password";
    password.name = "password";
    password.placeholder = "Password";

    var submit = document.createElement("button");
    submit.appendChild(document.createTextNode("Login"));
    submit.addEventListener('click', function(){
        var url = "php/authenticate.php"; // the script where you handle the form input.
        $.ajax({
            type: "POST",
            url: url,
            data: $("#form-login").serialize(), // serializes the form's elements.
            success: function(data)
            {
                //data is the JSON object from authenticate.php
                //"username" => "null",
                //"password" => "null",
                //"logged_in" => "false"
                var json = data,
                    obj = JSON.parse(json);
                alert(obj.username);
                alert(obj.logged_in); // show response from the php script.
            }
        });
        return false; // avoid to execute the actual submit of the form.
    });

    var register = document.createElement("div");
    register.innerHTML = "Register";
    register.addEventListener('click', function(){
        LOGIN.setVisibility(false);
        REGISTER.setVisibility(true);
    });


    this.login.appendChild(title);

    form.appendChild(username);
    form.appendChild(password);
    form.appendChild(submit);

    wrapper.appendChild(form);
    wrapper.appendChild(register);

    this.login.appendChild(wrapper);




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