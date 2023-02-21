<?php 
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css.css">
</head>
<body>
    
    <div id="forest">
        <div id="hero_stats"></div>
        <div class="left"><div id="avatar_fight"></div></div>
        <div class="health_holder"><div id="hero_health"></div></div><button onclick='walka()' id="start_fight">START</button><br>
        <div class="health_holder2"><div id="enemy_health"></div></div>
        
        <div class="right"><div id="enemy_fight"></div></div>
        <div id="enemy_stats"></div>
        </div>
        <div id="menu" >
        <div class="menu_container">

        </div>


        <div class="menu_container">


            
        </div>
    </div>
    <?php 
    $login=$_SESSION['sesion_login'];
    $conn = mysqli_connect('localhost', 'root', '','gra');
    $sql="SELECT `hero`,`money`,`exp` from `players` where `login`='$login'";
    $query=mysqli_query($conn,$sql);
    while($row=$query->fetch_assoc()){
          echo("<span id='hero_name'>$row[hero]</span><br>"."<span id='money_value'>$row[money]</span>"."<span id='hero_exp'>$row[exp]</span><br>");

    }
    mysqli_close($conn)
    ?>
 
 
    <script type="text/javascript" src="forest_choice.js"></script>
    <script type="text/javascript" src="forest_fight.js"></script>


</body>
</html>