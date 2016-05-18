<?php 
require_once("database.php");
require_once("user.php");

if(isset($_POST['username']) 
	&& isset($_POST['password']) 
	&& isset($_POST['confirm_password'])
	&& $_POST['password'] == $_POST['confirm_password']){
	
	$username = trim($_POST['username']);
	$password = trim($_POST['password']);
	
	$user = new User();

	//set the user attributes
	$user->username = $database->escape_value($username);
	$user->password = $database->escape_value($password);

	//inject the user into the database
	if($user->create()) {
		//send this back to JS
		echo "success";
	} else {
		//send this back to JS
		echo "failure";
	}
} else {
	echo "failure";
}
