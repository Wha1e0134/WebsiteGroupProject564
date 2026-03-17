<?php
session_start();

$conn = new mysqli("localhost","root","","perfume_store");

if(isset($_POST['login'])){

$username=$_POST['username'];
$password=$_POST['password'];

$result=$conn->query("SELECT * FROM admins 
WHERE username='$username' AND password='$password'");

if($result->num_rows>0){

$_SESSION['admin']=$username;

header("Location: admin.php");

}else{

echo "Wrong login";

}

}
?>

<h2>Admin Login</h2>

<form method="POST">

<input type="text" name="username" placeholder="Username"><br><br>

<input type="password" name="password" placeholder="Password"><br><br>

<button name="login">Login</button>

</form>