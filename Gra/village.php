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
    <div id="village">
        <table id="choice">
            <tr>
                <th id="choice">Wróg</th>
                <th id="choice">poziom</th>
            </tr>

            <tr id="choice">
                <td id="choice">Sklep</td>

                <td id="choice"> <button class="enemy_button" onclick="sklep()"></button></td>


            </tr>
            <tr id="choice">
                <td id="choice">Kowal</td>

                <td id="choice"><button class="enemy_button" onclick="kowal()"></button></td>


            </tr>


        </div>
        <div id="menu" >
        <div class="menu_container">
            <button class="menu_buttons" onclick="map()">MAPA</button>
            <button class="menu_buttons" onclick="skills()">SKILLS</button>

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
        

    <script>
         function kowal(){window.location.href='kowal.php'}
         function skills(){window.location.href='active.php'}
         function map(){window.location.href='map.php'}    
         function sklep(){window.location.href='shop.php'}    
</script>
</body>
</html>