<?php
session_start();

if(!isset($_SESSION['admin'])){
header("Location: login.php");
exit();
}

$conn = new mysqli("localhost","root","","perfume_store");

if(isset($_POST['add'])){

$name = $_POST['name'];
$brand = $_POST['brand'];
$gender = $_POST['gender'];
$price = $_POST['price'];
$ml = $_POST['ml'];

$image = $_FILES['image']['name'];
$tmp = $_FILES['image']['tmp_name'];

move_uploaded_file($tmp, "perfumeimages/".$image);;

$conn->query("INSERT INTO perfumes(name,brand,gender,price,ml,image)
VALUES('$name','$brand','$gender','$price','$ml','$image')");

header("Location: admin.php");
}
?>

<!DOCTYPE html>
<html>
<head>

<title>Add Perfume</title>

<style>

body{
font-family: Arial;
background:#f4f4f4;
padding:40px;
}

.container{
background:white;
padding:30px;
width:400px;
margin:auto;
border-radius:10px;
box-shadow:0 5px 15px rgba(0,0,0,0.2);
}

h2{
text-align:center;
margin-bottom:20px;
}

input,select{
width:100%;
padding:10px;
margin:8px 0;
border:1px solid #ccc;
border-radius:5px;
}

button{
width:100%;
padding:12px;
background:black;
color:white;
border:none;
border-radius:5px;
cursor:pointer;
font-size:16px;
}

button:hover{
background:#444;
}

</style>

</head>

<body>

<div class="container">

<h2>Add New Perfume</h2>

<form method="POST" enctype="multipart/form-data">

<label>Name</label>
<input type="text" name="name" required>

<label>Brand</label>
<input type="text" name="brand" required>

<label>Gender</label>
<select name="gender">
<option>Male</option>
<option>Female</option>
<option>Unisex</option>
</select>

<label>Price</label>
<input type="number" name="price" required>

<label>ML</label>
<input type="number" name="ml" required>

<label>Image</label>
<input type="file" name="image" required>

<button name="add">Add Perfume</button>

</form>

</div>

</body>
</html></form>