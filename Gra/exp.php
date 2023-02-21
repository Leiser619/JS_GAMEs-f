<?php
session_start();
$login=$_SESSION['sesion_login'];
$conn = mysqli_connect('localhost', 'root', '','gra');
$sql="SELECT `exp`,`Money` from `players` where `login`='$login'";
$query=mysqli_query($conn,$sql);
while($row=$query->fetch_assoc()){
    $convert=$row['exp']+$_COOKIE["exp"]+rand(0,9);
    $convert2=$row['Money']+$_COOKIE["gold"]+rand(-3,20);
    $sql2="UPDATE `players` SET `Exp` = '$convert' WHERE `login`='$login'"; 
    $sql3="UPDATE `players` SET `Money` = '$convert2' WHERE `login`='$login'"; 
    $query2=mysqli_query($conn,$sql2);
    $query3=mysqli_query($conn,$sql3);
}




mysqli_close($conn);
header("Location: map.php");
exit();

?>