
<?php

$conn = new mysqli("localhost","root","","perfume_store");

$id=$_GET['id'];

$result=$conn->query("SELECT * FROM perfumes WHERE id=$id");
$row=$result->fetch_assoc();

if(isset($_POST['update'])){

$name=$_POST['name'];
$brand=$_POST['brand'];
$gender=$_POST['gender'];
$ml=$_POST['ml'];
$price=$_POST['price'];

$conn->query("UPDATE perfumes 
SET name='$name', brand='$brand', gender='$gender', ml='$ml', price='$price'
WHERE id=$id");

header("Location: admin.php");

}

?>

<h2>Edit Perfume</h2>

<form method="POST">

<input type="text" name="name" value="<?php echo $row['name']; ?>"><br><br>

<input type="text" name="brand" value="<?php echo $row['brand']; ?>"><br><br>

<input type="number" name="price" value="<?php echo $row['price']; ?>"><br><br>

<select name="gender">

<option><?php echo $row['gender']; ?></option>
<option>Men</option>
<option>Women</option>
<option>Unisex</option>

</select><br><br>

<input type="number" name="ml" value="<?php echo $row['ml']; ?>"><br><br>

<button name="update">Update</button>

</form>