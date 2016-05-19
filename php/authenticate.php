<?php 
require_once("database.php");
require_once("user.php");


if(isset($_POST['username']) && isset($_POST['password'])){
	
	// $user = new User();

	// $user->setUser($_POST['username']);
	// $user->setPass($_POST['password']);

	
	//  $user->update('nasim');
	// //echo $user->getUser();
	// echo "Good";
	$found_user = User::authenticate($_POST['username'],$_POST['password']);
	/*prepare the associative array*/
	if($found_user){
		$user_array = array(
		"username" => $found_user->username,
		"password" => $found_user->password,
		"logged_in" => 1
		);
		echo json_encode($user_array);
	} else {
		$user_array = array(
		"username" => "null",
		"password" => "null",
		"logged_in" => 0
		);
		echo json_encode($user_array);
	}
		
} else {
	echo "no username or password";
}