<?php

/* php file to destroy session and sending user back to login page */

session_destroy(); 
header('Location: Logingin.html');

?>