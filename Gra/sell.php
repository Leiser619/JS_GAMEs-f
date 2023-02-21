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
    <div id="sell">

        </div>
        <div id="menu" >
        <div class="menu_container">
        <button class="shop_map_button" onclick="map()">MAPA</button>
        <button class="shop_sell_button" onclick="sell()">ZAKUP</button>

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
        <script src="shop.js"></script>

</body>
</html>