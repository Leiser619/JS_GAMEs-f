
let userChoice
const possiblechoices=document.querySelectorAll('.enemy_button')
possiblechoices.forEach(possiblechoices=>possiblechoices.addEventListener('click',(e)=>{
    localStorage.removeItem("enemy_dragon")
    userChoice=e.target.id
    localStorage.setItem("enemy_dragon",userChoice)
    game()
}))

function game(){window.location.href='dragon_fight.php'}
function skills(){window.location.href='active.php'}
function map(){window.location.href='map.php'}