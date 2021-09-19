<?php
require 'connect.php';
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
   {
        $request=json_decode($postdata);
      
        
 
        $name=$request->name;
        $phone=$request->phone;
        $division=$request->division;
        $city=$request->city;
        $thana=$request->thana;
        $score=$request->score;
       
   
      $sql = "INSERT INTO users( 
           name,
           phone,
           division, 
           city,
           thana,
           score)
       VALUES (
                '{$name}',
                '{$phone}',
                '{$division}',
                '{$city}',
                '{$thana}',
                '{$score}'

        
              )";
             
             if(mysqli_query($con,$sql)){
                http_response_code(201);
                echo "New record created successfully";
              }
              else{
                http_response_code(422);
                
              }
          


   }
  

?>