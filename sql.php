<?php

/* php file to connect and send data to the database */

$username = filter_input(INPUT_POST, 'username');
$email = filter_input(INPUT_POST, 'email');
$password = filter_input(INPUT_POST, 'psw');
$confirm_password = filter_input(INPUT_POST, 'psw-repeat');
if (!empty($username)){
if (!empty($email)){
if (!empty($password)){
if (!empty($confirm_password)){
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "activity1";

// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO users ( username, email, password)
values ('$username','$email','$confirm_password')";
if ($conn->query($sql)){
header("location: congrats.html");
}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();
}
}
}
}
}
?>