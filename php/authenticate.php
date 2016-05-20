<?php 
require_once("database.php");
require_once("user.php");
require_once("userscore.php");

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
		$user_scores = UserScore::find_by_id($found_user->id);
		//$top_ten = UsernameScore::find_top_ten();
		// $scores = array();

		// foreach ($user_scores as $key => $value) {
		// 	array_push($scores, $value->score);
		// }

		$user_array = array(
		"username" => $found_user->username,
		"password" => $found_user->password,
        "id" => $found_user->id,    
		"logged_in" => "true",
		"scores_array" => $top_ten
		);
		echo json_encode($user_array); 
		
	} else {
		// $user_array = array(
		// "username" => "null",
		// "password" => "null",
		// "logged_in" => "false"
		// );
		// echo json_encode($user_array);
		echo "bad";
	}
		
} else {
	echo "no username or password";
}