<?php
/* ajax file to fetch data from the database to check if username is available or not */

include "configure.php";

if(isset($_POST['username'])){
   $username = mysqli_real_escape_string($con,$_POST['username']);

   $query = "select count(*) as cntUser from users where username='".$username."'";

   $result = mysqli_query($con,$query);
   $response = "<span style='color:rgb(114, 224, 133);'>Available.</span>";
   if(mysqli_num_rows($result)){
      $row = mysqli_fetch_array($result);

      $count = $row['cntUser'];
    
      if($count > 0){
          $response = "<span style='color:rgb(235, 65, 93);'>Not Available.</span>";
          
      }
   
   }

   echo $response;
   die;
}