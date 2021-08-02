<?php
require 'connection.php';
 $postdata = file_get_contents("php://login");

 if(isset($posttdata) && !empty($posttdata))
 {
     $request = json_decode($posttdata);

     //Saitize
     $username = $request->username;
     $password = $request->password;
   

     //check the dats from exam database

    $sql = "SELECT `username`,`password` FROM exam Where username =`{$username}` AND password =`{$password}`";  

     if(mysqli_query($con,$sql))
     {
         http_response_code(201);
     }
     else{
         http_response_code(422);
     }

 }
?>