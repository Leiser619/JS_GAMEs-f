
let userChoice
const possiblechoices=document.querySelectorAll('.enemy_button')
possiblechoices.forEach(possiblechoices=>possiblechoices.addEventListener('click',(e)=>{
    localStorage.removeItem("enemy_temple")
    userChoice=e.target.id
    localStorage.setItem("enemy_temple",userChoice)
    game()
}))


function map(){window.location.href='map.php'}
function game(){window.location.href='temple_fight.php'}
function skills(){window.location.href='active.php'}