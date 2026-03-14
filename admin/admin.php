<?php
session_start();

if(!isset($_SESSION['admin'])){
header("Location: login.php");
exit();
}

$conn = new mysqli("localhost","root","","perfume_store");

$result = $conn->query("SELECT * FROM perfumes");
?>

<h2>Perfume Admin Panel</h2>

<a href="add_perfume.php">Add Perfume</a>
<a href="logout.php">Logout</a>

<table border="1">

<tr>
<th>ID</th>
<th>Name</th>
<th>Brand</th>
<th>Gender</th>
<th>ML</th>
<th>Action</th>
</tr>

<?php while($row=$result->fetch_assoc()){ ?>

<tr>

<td><?php echo $row['id']; ?></td>
<td><?php echo $row['name']; ?></td>
<td><?php echo $row['brand']; ?></td>
<td><?php echo $row['gender']; ?></td>
<td><?php echo $row['ml']; ?></td>

<td>

<a href="edit_perfume.php?id=<?php echo $row['id']; ?>">Edit</a>

<a href="delete_perfume.php?id=<?php echo $row['id']; ?>">Delete</a>

</td>

</tr>

<?php } ?>

</table>