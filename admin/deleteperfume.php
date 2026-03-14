<?php

$conn = new mysqli("localhost","root","","perfume_store");

$id=$_GET['id'];

$conn->query("DELETE FROM perfumes WHERE id=$id");

header("Location: admin.php");

?>