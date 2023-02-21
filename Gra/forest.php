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
        <table id="choice">
            <tr id="choice">
                <th id="choice">Wróg</th>
                <th id="choice">poziom</th>
                <th id="choice">poziom</th>
            </tr>
            <tr id="choice">
                <td id="choice">Szkieletor</td>
                <td id="choice">4LVL</td>
                <td id="choice"><button id="skeleton" class="enemy_button"></button></td>

            </tr>
            <tr id="choice">
                <td id="choice">Zmutowany szkielet</td>
                <td id="choice">7LVL</td>
                <td id="choice"><button  id="skeleton_mutant" class="enemy_button"></button></td>

            </tr>
            <tr id="choice">
                <td id="choice">Leśna strzyga</td>
                <td id="choice">10LVL</td>
                <td id="choice"><button id="warrior" class="enemy_button"></button></td>

            </tr>
            <tr id="choice">
                <td id="choice">Leśny goblin</td>
                <td id="choice">12LVL</td>
                <td id="choice"><button id="goblin" class="enemy_button"></button></td>

            </tr>
            <tr id="choice">
                <td id="choice">Obrączyni wieży</td>
                <td id="choice">16LVL</td>
                <td id="choice"><button id="defender" class="enemy_button"></button></td>

            </tr>
            <tr id="choice">
                <td id="choice">Leśny ent</td>
                <td id="choice">20LVL</td>
                <td id="choice"><button id="ent" class="enemy_button"></button></td>

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
    $sql="SELECT `hero`,`money` from `players` where `login`='$login'";
    $query=mysqli_query($conn,$sql);
    while($row=$query->fetch_assoc()){
          echo("<span id='hero_name'>$row[hero]</span><br>"."<span id='money_value'>$row[money]</span>");

    }
    mysqli_close($conn);
    ?>
        

    <script src="forest_choice.js"></script>
</body>
</html>