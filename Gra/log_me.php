<?php  
    session_start();
    $conn = mysqli_connect('localhost', 'root', '','gra');
    $login=$_POST['login_login'];
    $_SESSION["sesion_login"]=$login;
    $password=$_POST['password_password'];
    $sql="SELECT login,password FROM `players` WHERE login='$login' AND password='$password'";
    $query=mysqli_query($conn,$sql);
    if(mysqli_num_rows($query)==0){
        header('Location:log_again.html');
        mysqli_close($conn);
        exit();
    }else{
        header('Location:active.php');
        mysqli_close($conn);
        exit();

    }
    
?>