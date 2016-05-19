/**
 * Created by Deric on 2016-05-16.
 */

function Login() {

    this.component = document.createElement("div");
    this.component.id = "login-page";
    this.component.className = "page";

    //build
    var title = document.createElement("h1");
    title.innerHTML = "Login";

    var wrapper = document.createElement("div");
    wrapper.className  = "wrapper";

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
    submit.addEventListener('click', function(event){
        event.preventDefault();
        var url = "php/authenticate.php"; // the script where you handle the form input.

        $.ajax({
            type: "POST",
            url: url,
            data: $("#form-login").serialize(), // serializes the form's elements.
            success: function(data) {

                //data is the JSON object from authenticate.php
                //"username" => "null",
                //"password" => "null",
                //"logged_in" => "false"

                var obj = JSON.parse(data);

                console.log(obj);
                console.log(obj.username);

                if(obj.logged_in == "1"){
                    alert("logged in success");
                    PLAYER_DATA.setLoggedInState(true);
                    LOGIN.setVisibility(false);
                    MENU.setVisibility(true);
                    username.style.border = "none";
                    password.style.border = "none";
                }
                else {
                    alert("logged in failed cunt");
                    username.style.border = "2px solid red";
                    password.style.border = "2px solid red";
                    username.value = '';
                    password.value = '';

                }

            }
        });





        return false; // avoid to execute the actual submit of the form.
    });

    var register = document.createElement("a");
    register.appendChild(document.createTextNode("Register"));
    register.addEventListener('click', function(){
        LOGIN.setVisibility(false);
        REGISTER.setVisibility(true);
    });

    var home = document.createElement("div");
    home.className = "home-button";
    home.addEventListener('click', function(){
        LOGIN.setVisibility(false);
        MENU.setVisibility(true);
    });



    this.component.appendChild(title);

    form.appendChild(username);
    form.appendChild(password);
    form.appendChild(submit);

    wrapper.appendChild(form);
    wrapper.appendChild(register);

    this.component.appendChild(wrapper);
    this.component.appendChild(home);

}


Login.prototype = {

    setVisibility: function(visibility){
        var container = document.getElementById("container");
        if(visibility == true){
            container.appendChild(this.component);
        }
        else {
            container.removeChild(this.component);
        }
    }
};