<?php

/* php file to perform the checking of username and password if it matches in the database and sends the user to the appropriate link */
session_start();

include "configure.php";

$usname = mysqli_real_escape_string($con,$_POST['uname']);
$password = mysqli_real_escape_string($con,$_POST['psw']);

if ($usname != "" && $password != ""){

    $sql_query = "select count(*) as cntUser from users where username='".$usname."' and password='".$password."'";
    $result = mysqli_query($con,$sql_query);
    $row = mysqli_fetch_array($result);

    $count = $row['cntUser'];

    if($count > 0){
        $_SESSION['usname'] = $usname;
        header("location: Welcom.php");
    }else{
         header("location: Logingin_err.html");
    }
}

?>




<script src="./jquery-3.6.0.js"></script>