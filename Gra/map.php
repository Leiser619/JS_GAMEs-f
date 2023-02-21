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
    <div id="map">
        <button class="button a" onclick="temple()">Zachmurzona świątynia</button>
        <button class="button b" onclick="forest()">Leśna wieża</button>
        <button class="button c" onclick="dragon()">Smoczy przesmyk</button>
        <button class="button d">Haty rybackie</button>
        <button class="button e">Wyspa zwycięzców</button>
        <button class="button f" onclick="village()">Wioska ryżu</button>
        <button class="button g">Pomnik buddy</button>
        <button class="button h">Bordowa góra</button>
        <button class="button i">Spalone haty</button>
        </div>
        <div id="menu" >
        <div class="menu_container">
            <button class="menu_buttons">MAPA</button>
            <button class="menu_buttons" onclick="skills()">SKILLS</button>

        </div>


        <div class="menu_container">
        </div>
    </div>
    


    
<script>
    function skills(){window.location.href='active.php'}
    function forest(){window.location.href='forest.php'}
    function city(){window.location.href='active.php'}
    function temple(){window.location.href='temple.php'}
    function dragon(){window.location.href='dragon.php'}
    function fishing(){window.location.href='active.php'}
    function island(){window.location.href='active.php'}
    function village(){window.location.href='village.php'}
    function budda(){window.location.href='active.php'}
    function hill(){window.location.href='active.php'}
    function huts(){window.location.href='active.php'}

    

</script>
</body>
</html>
