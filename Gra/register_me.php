<?php  
    $conn = mysqli_connect('localhost', 'root', '','gra');

    $login=$_POST['login'];

    $password=$_POST['password'];

    $hero = $_POST['hero'];

    $sql1="INSERT INTO `players` (`id`, `login`, `password`, `hero`) VALUES ('NULL', '$login', '$password', '$hero')"; 

    $sql2="SELECT login FROM `players` WHERE login='$login'";

    $query=mysqli_query($conn,$sql2);

    if(mysqli_num_rows($query)==0){
        $registering=mysqli_query($conn,$sql1);

        mysqli_close($conn);

        header('Location:logowanie.html');

        exit();
    }
    else{
        header('Location:register_again.html');
    }
?>