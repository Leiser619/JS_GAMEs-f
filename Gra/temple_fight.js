const heros=document.getElementById('hero_name').innerText

avatar=document.getElementById("avatar_fight")

enemyA=document.getElementById("enemy_fight")

const convert2="cloud_"+localStorage.getItem("enemy_temple")+".png"

const convert="bohaterowie/"+heros+".png"

enemyA.innerHTML ="<img src="+convert2+" id='hero_fight'></img>"

avatar.innerHTML ="<img src="+convert+" id='hero_fight'></img>"

function getJson(){

    xhr=new XMLHttpRequest()
    xhr.onload=function(){
        if(this.status===200){
            res=JSON.parse(this.responseText)
            staty()
            //walka()

            
            
        }



}
xhr.open('GET','staty.json',true)
xhr.send()

}
getJson()

function staty(){

    enemy_health=res.cloud[localStorage.getItem("enemy_temple")].health
    enemy_magic=res.cloud[localStorage.getItem("enemy_temple")].magic
    enemy_defence=res.cloud[localStorage.getItem("enemy_temple")].defence
    enemy_attack_speed=res.cloud[localStorage.getItem("enemy_temple")].attack_speed
    enemy_attack=res.cloud[localStorage.getItem("enemy_temple")].attack
    enemy_weapon=res.cloud[localStorage.getItem("enemy_temple")].weapon
    enemy_spell=res.cloud[localStorage.getItem("enemy_temple")].spell


    hero_health=res[heros].health
    hero_magic=res[heros].magic
    hero_defence=res[heros].defence
    hero_attack_speed=res[heros].attack_speed
    hero_attack=res[heros].attack
    hero_weapon=res[heros].weapon
    hero_spell=res[heros].spell
    
    
    document.getElementById('hero_stats').innerHTML+="Health : "+hero_health+"<br><br><br><br>"
    document.getElementById('hero_stats').innerHTML+="Magic : "+hero_magic+"<br><br><br><br>"
    document.getElementById('hero_stats').innerHTML+="Defence : "+hero_defence+"<br><br><br><br>"
    document.getElementById('hero_stats').innerHTML+="Attack speed : "+hero_attack_speed+"<br><br><br><br>"
    document.getElementById('hero_stats').innerHTML+="Attack : "+hero_attack+"<br>"


    document.getElementById('enemy_stats').innerHTML+="Health : "+enemy_health+"<br><br><br><br>"
    document.getElementById('enemy_stats').innerHTML+="Magic : "+enemy_magic+"<br><br><br><br>"
    document.getElementById('enemy_stats').innerHTML+="Defence : "+enemy_defence+"<br><br><br><br>"
    document.getElementById('enemy_stats').innerHTML+="Attack speed : "+enemy_attack_speed+"<br><br><br><br>"
    document.getElementById('enemy_stats').innerHTML+="Attack : "+enemy_attack+"<br>"

    enemyA.innerHTML ="<img src="+res.cloud[localStorage.getItem("enemy_temple")].avatar+" id='hero_fight'></img>"

    avatar.innerHTML ="<img src="+convert+" id='hero_fight'></img>"



}
var random_time_enemy=Math.floor(Math.random() * (10000 - 5000)) + 5000
var random_time_hero=Math.floor(Math.random() * (10000 - 5000)) + 5000

var i = 0;
var a=0
function walka(){

    if (i == 0) {
        i = 1;
        var elem = document.getElementById("hero_health");
        var width = 100
        var widthh = 100
        var id = setInterval(frame, enemy_attack_speed);
        var heroms=setInterval(hero_ma,random_time_enemy)
        function hero_ma(){
            hero_health=hero_health-enemy_magic
            widthh=width-(percent*enemy_magic);
            const enemy_spell_img = document.createElement('img');
            enemy_spell_img.setAttribute("src",enemy_spell)
            enemy_spell_img.setAttribute("class","spell_img")
            enemy_spell_img.style.position='absolute'
            enemy_spell_img.style.top='150px'
            enemy_spell_img.style.right='1050px'
            document.getElementById('temple').appendChild(enemy_spell_img);
            spel=setInterval(znik,1000)
            function znik(){
                    enemy_spell_img.remove()            
            }

        }
        function frame() {
        if (hero_health <=0) {
            clearInterval(id);
            clearInterval(heroms);
            clearInterval(idd);
            clearInterval(heromss);
            elem.innerHTML = 0  + "HP";
            elem.style.width = 0 + "%";
            i = 0;
            const popu=document.createElement('div')
            const score=document.createElement('p')
            const summary=document.createElement('button')
            summary.setAttribute("class","menu_buttons")
            summary.innerHTML="Wróć do menu"
            summary.onclick=powrot
            popu.setAttribute('id','popu')
            document.getElementById('temple').appendChild(popu);
            score.innerHTML="Przegrałeś"
            popu.appendChild(score)
            popu.appendChild(summary)
            
            

        } else {
            percent=width/hero_health
            width=width-(percent*enemy_attack);
            hero_health=hero_health-enemy_attack
            const enemy_weapon_img = document.createElement('img');
            enemy_weapon_img.setAttribute("src",  enemy_weapon)
            enemy_weapon_img.setAttribute("id","enemy_weapon_img")
            enemy_weapon_img.style.position='absolute'
            enemy_weapon_img.style.top='100px'
            enemy_weapon_img.style.right='800px'
            atak=setInterval(ruch,(enemy_attack_speed/2))
            function ruch(){
                    enemy_weapon_img.remove()            
            }
    


            document.getElementById('temple').appendChild(enemy_weapon_img);
            elem.style.width = width + "%";
            elem.innerHTML = hero_health  + "HP";
        }
        }
    }
    // atak na przeciwnika

    
    if (a == 0) {
        a = 1;
        var element = document.getElementById("enemy_health");
        var widthg = 100
        var widthhg = 100
        var idd = setInterval(framee, hero_attack_speed);
        var heromss=setInterval(enemy_ma,random_time_hero)
        function enemy_ma(){
            enemy_health=enemy_health-hero_magic
            widthhg=widthg-(percentt*hero_magic);
            const hero_spell_img = document.createElement('img');
            hero_spell_img.setAttribute("src",hero_spell)
            hero_spell_img.setAttribute("class","spell_img")
            hero_spell_img.style.position='absolute'
            hero_spell_img.style.top='150px'
            hero_spell_img.style.left='1050px'
            document.getElementById('temple').appendChild(hero_spell_img);
            speel=setInterval(znikk,1000)
            function znikk(){
                    hero_spell_img.remove()            
            }

        }
        function framee() {
        if (enemy_health <=0) {
            clearInterval(idd);
            clearInterval(heromss);
            clearInterval(id);
            clearInterval(heroms);
            element.innerHTML = 0  + "HP";
            element.style.width = 0 + "%";
            a = 0;
            const popu=document.createElement('div')
            const score=document.createElement('p')
            const summary=document.createElement('button')
            summary.setAttribute("class","menu_buttons")
            summary.innerHTML="Wróć do menu"
            summary.onclick=powrot_punkty
            popu.setAttribute('id','popu')
            document.getElementById('temple').appendChild(popu);
            score.innerHTML="Wygrałeś"
            popu.appendChild(score)
            popu.appendChild(summary)
            



        } else {
            percentt=widthg/enemy_health
            widthg=widthg-(percentt*hero_attack);
            enemy_health=enemy_health-hero_attack
            const hero_weapon_img = document.createElement('img');
            hero_weapon_img.setAttribute("src",  hero_weapon)
            hero_weapon_img.setAttribute("id","hero_weapon_img")
            hero_weapon_img.style.position='absolute'
            hero_weapon_img.style.top='100px'
            hero_weapon_img.style.left='800px'
            atak=setInterval(ruchh,(hero_attack_speed/2))
            function ruchh(){
                    hero_weapon_img.remove()            
            }
    


            document.getElementById('temple').appendChild(hero_weapon_img);
            element.style.width = widthg + "%";
            element.innerHTML = enemy_health  + "HP";
        }
        }
    }

    function powrot(){
        window.location.href='map.html'
    }
    function powrot_punkty(){
        document.cookie = "exp=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "gold=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

        document.cookie="exp="+res.cloud[localStorage.getItem("enemy_temple")].exp

        document.cookie="gold="+res.cloud[localStorage.getItem("enemy_temple")].gold
        window.location.href='exp.php'


    }



//167 500
}
    