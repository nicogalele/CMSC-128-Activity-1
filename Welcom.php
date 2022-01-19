<?php

session_start();
// Timeout, automatic log out after inactivity
$inactive = 10;//set to 300 for 5 mins
if(isset($_SESSION['start']) ) {
	$session_life = time() - $_SESSION['start'];
	if($session_life > $inactive){
		 session_destroy();header("Location: Logingin_tmout.html");
	}
}
$_SESSION['start'] = time();

//Check user login or not
if(!isset($_SESSION['usname'])){
   header('Location: Logingin.html');
}
?>

<!DOCTYPE html>
<head>
    <title>Activity 1</title>
    <link>
    <link rel="stylesheet"  href="./Welcom.css">
    <meta http-equiv="refresh" content="15"> <!--automatically refreshes the page to show inactivity-->

</head>
<body>
    <div class="container">
        <h1>Congrats for signing in,<br>
            your code works
        </h1>
        <hr>
        <form action="logout.php">
            <button type="submit" class="logout">Log out</button>  
    <p>Account automatically signs out after 5 minutes</p>
</body>