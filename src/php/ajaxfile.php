<?php
header("Content-Type: application/json");
// File name
$filename = $_FILES['file']['name'];

$file_new_name=$_REQUEST['file_name'];



// Valid file extensions
$invalid_extensions = array("exe","php");


// File extension
$extension = pathinfo($filename, PATHINFO_EXTENSION);

// Check extension
if(!(in_array(strtolower($extension),$invalid_extensions)) ) {

   // Upload file
   $server_file_name=$file_new_name."-".rand(0,10000).".".$extension;
   if(move_uploaded_file($_FILES['file']['tmp_name'], dirname(__DIR__, 1).'/docs/'.$server_file_name)){
      echo '{"uploaded":true,"file_name_on_server":"'.$server_file_name.'"}';
   }else{
      echo '{"uploaded":false}';
   }
}else {
   echo '{"uploaded":false}';
}
exit;