<script src = "https://code.jquery.com/jquery-2.2.3.min.js"></script>

<form id='auth' method = 'POST' action = 'index.php'>
Username: <input type = 'textbox' name = 'username' id = 'username'/> <br/> 
Password: <input type = 'password' name = 'password'/>
<button id = "login" type = 'submit' name = 'submit'>login</button>
</form>

<script>

$("button#login").click(function() {

    var url = "process_form.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#auth").serialize(), // serializes the form's elements.
           success: function(data)
           {
              var json = data,
              obj = JSON.parse(json);
              alert(obj.username);
              alert(obj.status); // show response from the php script.
           }
         });

    return false; // avoid to execute the actual submit of the form.
});

</script>