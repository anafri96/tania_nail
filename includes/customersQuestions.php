<?php
$server_name = "localhost"; 
$user_name = "nofarre_user2"; 
$password = "123456";
$database = "nofarre_neww";

$conn = new mysqli($server_name, $user_name, $password, $database); //יצירת חיבור לשרת SQL
if ($conn->connect_error) { 
    die("Error connecting: " . $conn->connect_error);
}


$Name = $_POST['Name'];
$lastName = $_POST['lastName'];
$Email = $_POST['Email'];
$Telephone = $_POST['Telephone'];
$Comment = $_POST['Comment'];

$sql="INSERT INTO new_questions (name1,lastName,Email,Telephone,Comment) VALUES ('" . $Name . "','" . $lastName . "', '" . $Email . "', '" . $Telephone . "', '" . $Comment . "')";

if(!$result = $conn->query($sql)){
die('There was an error running the query [' . $conn->error . ']');
}
else
{
echo "Thank you! We will contact you soon";
}

?>
