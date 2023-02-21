
let userChoice
const possiblechoices=document.querySelectorAll('.enemy_button')
possiblechoices.forEach(possiblechoices=>possiblechoices.addEventListener('click',(e)=>{
    localStorage.removeItem("enemy_forest")
    userChoice=e.target.id
    localStorage.setItem("enemy_forest",userChoice)
    game()
}))

function game(){window.location.href='forest_fight.php'}
function skills(){window.location.href='active.php'}
function map(){window.location.href='map.php'}