<?php
require_once("userscore.php");

$score = $_POST['score'];
$id = $_POST['id'];

$new_score = new UserScore();

$new_score->id = $id;
$new_score->score = $score;
$new_score->playtime;

if($new_score->create()) {

  echo "it works!";
}
echo "it doesnetworks!";





