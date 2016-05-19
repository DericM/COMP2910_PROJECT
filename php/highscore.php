<?php 
require_once('userscore.php');

$top_ten = UsernameScore::find_top_ten();

echo json_encode($top_ten);
