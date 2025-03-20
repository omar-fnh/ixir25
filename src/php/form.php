<?php

$servername = "localhost";
$username = "mirzaamc_expo";
$password = "Omar-2015";
$dbname="mirzaamc_expo";

$data = json_decode( file_get_contents( 'php://input' ), true );
//$json=file_get_contents( 'php://input' );
$json=json_encode($data);

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: IXIR Expo<info@fouzexpos.com>' . "\r\n";

$headers2 = "MIME-Version: 1.0" . "\r\n";
$headers2 .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers2 .= 'From: IXIR Expo<info@fouzexpos.com>' . "\r\n";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

mysqli_query($conn, "SET NAMES 'utf8'");
mysqli_query($conn, "SET CHARACTER SET utf8"); 

$company = mysqli_real_escape_string($conn, $data['company']['name']);
$json = mysqli_real_escape_string($conn, $json);
$sqlInsert ="INSERT INTO `ixir2025`(`company`,`json`) VALUES ('".$company."','".$json."')";
if($resultInsert = $conn->query($sqlInsert)==true){}

//$emailRecipient="omar.sedki@gmail.com";
$emailRecipient="info@fouzexpos.com";





$subject= "ixir 2025 registration | ". $data['company']['name'];
$message="<div>";

// -------------------------  Company 

$message.="<div style='margin:10px;padding:20px;border:1px solid gray'>";

$message.="<div>Company :<span style='font-weight:bold'>".$data['company']['name']."</span></div>";
$message.="<div>Arabic Name :<span style='font-weight:bold'>".$data['company']['name_ar']."</span></div>";

if ($data['company']['brand']['different'] ==true) {
$message.="<div>Brand Name :<span style='font-weight:bold'>".$data['company']['brand']['name']."</span></div>";
}

$message.="</div>";

//------ contact

$message.="<div style='margin:10px;padding:20px;border:1px solid gray'>";

$message.="<div>Contact Name :<span style='font-weight:bold'>".$data['contact']['name']."</span></div>";
$message.="<div>Designation :<span style='font-weight:bold'>".$data['contact']['designation']."</span></div>";
$message.="<div>Email :<span style='font-weight:bold'>".$data['contact']['email']."</span></div>";

$message.="</div>";

//---- address website ....
$message.="<div style='margin:10px;padding:20px;border:1px solid gray'>";

$message.="<div>Address :<span style='font-weight:bold'>".$data['address']."</span></div>";
$message.="<div>Website :<span style='font-weight:bold'>".$data['website']."</span></div>";
$message.="<div>Instagram :<span style='font-weight:bold'>".$data['instagram']."</span></div>";
$message.="<div>Phone :<span style='font-weight:bold'>".$data['phone']."</span></div>";
$message.="<div>Mobile :<span style='font-weight:bold'>".$data['mob']."</span></div>";

$message.="</div>";

//----------------- correspondence

if ($data['contact2'] ==true) {
  $message.="<div style='margin:10px;padding:20px;border:1px solid gray'>";

  $message.="<div>contact for All Exhibit Correspondence</div>";
  $message.="<div>Name :<span style='font-weight:bold'>".$data['correspondence']['name']."</span></div>";
  $message.="<div>Designation :<span style='font-weight:bold'>".$data['correspondence']['designation']."</span></div>";
  $message.="<div>Email :<span style='font-weight:bold'>".$data['correspondence']['email']."</span></div>";
  $message.="<div>Mobile :<span style='font-weight:bold'>".$data['correspondence']['mob']."</span></div>";

  $message.="</div>";
}

 // categories
$message.="<div style='margin:10px;padding:20px;border:1px solid gray'>Categories : ";

if(is_array($data['industry'])){

foreach($data['industry'] as $categorie_value){

  $CATEGORIEVALUE = is_array($categorie_value) ? $categorie_value['value'] : $categorie_value;

$message.="<div style='text-align:center;border-radius:10px;display:inline-block;font-weight:bold;padding:5px;margin:5px;border:1px solid gray'>".$CATEGORIEVALUE."</div>";

 }
}

$message.="</div>";


//booth choice 1
$message.="<div style='margin:10px;padding:20px;border:1px solid gray'>Booths : ";

if(is_array($data['booths1'])){

foreach($data['booths1'] as $booths1_value){

$message.="<div style='text-align:center;border-radius:10px;display:inline-block;font-weight:bold;padding:5px;margin:5px;border:1px solid gray'>".$booths1_value['hall']." - ".$booths1_value['id']."<br/><small>".$booths1_value['type']."</small></div>";

 }
}

$message.="</div>";


//booth choice 2
/*
$message.="<div style='margin:10px;padding:20px;border:1px solid gray'>Second Choice : ";

if(is_array($data['booths2'])){

foreach($data['booths2'] as $booths2_value){

$message.="<div style='text-align:center;border-radius:10px;display:inline-block;font-weight:bold;padding:5px;margin:5px;border:1px solid gray'>".$booths2_value['hall']." - ".$booths2_value['id']."<br/><small>".$booths2_value['type']."</small></div>";

 }
}

$message.="</div>";

*/
// -------------------- docs -------------------------
$message.="<div style='margin:10px;padding:20px;border:1px solid gray'>Documents : ";

if(is_array($data['files'])){

foreach($data['files'] as $file_key => $file_value){
if($file_value['server']){
$message.="<div style='text-align:center;border-radius:10px;display:inline-block;font-weight:bold;padding:12px;margin:5px;border:1px solid gray'> <a style='text-decoration:none' download href='https://ixirexpo.com/2025/registration/docs/".$file_value['server']."'> 📄 ".$file_key."</a></div>";
}
}
}

$message.="</div>";
//------------------------ payment methods----

$message.="<div style='margin:10px;padding:20px;border:1px solid gray'>Accepted Payment Methods :<span style='font-weight:bold'>".$data['selectedPaymentMethod']."</span></div>";
//-------------------
$myfile = fopen("../log/".$data['company']['name']."-".time().".html","w") or die("Unable to open file!");
fwrite($myfile, $message);
fclose($myfile); 




if(mail($emailRecipient, $subject, $message, $headers))
{ 
   echo '{"form_sent":true}';	
  mail($data['contact']['email'],'ixir 2025 Exhibition','Thank you for registering with ixir 2025 Exhibition.<br>Please allow one of our representatives to call you within 3 working days.', $headers2);
} else{
    echo '{"form_sent":false}';
}



?>