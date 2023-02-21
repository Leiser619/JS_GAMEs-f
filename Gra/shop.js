
setInterval(getJson(),86400000)
exp=document.getElementById("hero_exp").innerText


function getJson(){
    xhr=new XMLHttpRequest()
    xhr.onload=function(){

        if(this.status===200){
            res=JSON.parse(this.responseText)
            //console.log(res[hero])
         
            att_l=[Math.floor((Math.random() * 9) + 1),Math.floor((Math.random() * 9) + 1),Math.floor((Math.random() * 9) + 1)]

            mag_l=[Math.floor((Math.random() * 7) + 1),Math.floor((Math.random() * 7) + 1),Math.floor((Math.random() * 7) + 1)]
        
            def_l=[Math.floor((Math.random() * 15) + 1),Math.floor((Math.random() * 15) + 1),Math.floor((Math.random() * 15) + 1)]
        
            att_spd_l=[Math.floor((Math.random() * 9) + 1),Math.floor((Math.random() * 9) + 1),Math.floor((Math.random() * 9) + 1),]
        
            epic_l=[Math.floor((Math.random() * 4) + 1)]
        
            if(exp<200){
                document.getElementById("shop").innerHTML= "<table id='shop_table'><tr id='tr_shop'><th id='th_shop'>Mage items</th><th id='th_shop'>   Attack items</th><th id='th_shop'>Health items</th><th id='th_shop'>Attack Speed Items</th><th id='th_shop'>Special Items(Po 5 lvl)</th></tr>"
                    +"<tr><td id='td_shop'><img class='shop_item' src="+res.armor.magic[mag_l[0]].avatar+"></img><br><button class='shop_button' id='magic.["+mag_l[0]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack[att_l[0]].avatar+"></img><br><button class='shop_button' id='attack.["+att_l[0]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.health[def_l[0]].avatar+"></img><br><button class='shop_button' id='health.["+def_l[0]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack_speed[att_spd_l[0]].avatar+"></img><br><button class='shop_button' id='attack_speed.["+att_spd_l[0]+"]'>KUP</button></td>"
                    +"<tr><td id='td_shop'><img class='shop_item' src="+res.armor.magic[mag_l[1]].avatar+"></img><br><button class='shop_button' id='magic.["+mag_l[1]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack[att_l[1]].avatar+"></img><br><button class='shop_button' id='attack.["+att_l[1]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.health[def_l[1]].avatar+"></img><br><button class='shop_button' id='health.["+def_l[1]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack_speed[att_spd_l[1]].avatar+"></img><br><button class='shop_button' id='attack_speed.["+att_spd_l[1]+"]'>KUP</button></td>"
                    +"<tr><td id='td_shop'><img class='shop_item' src="+res.armor.magic[mag_l[2]].avatar+"></img><br><button class='shop_button' id='magic.["+mag_l[2]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack[att_l[2]].avatar+"></img><br><button class='shop_button' id='attack.["+att_l[2]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.health[def_l[2]].avatar+"></img><br><button class='shop_button' id='health.["+def_l[2]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack_speed[att_spd_l[2]].avatar+"></img><br><button class='shop_button' id='attack_speed.["+att_spd_l[2]+"]'>KUP</button></td>"
                } 
            
        
        
        
            if(exp>=200){
                document.getElementById("shop").innerHTML= "<table id='shop_table'><tr id='tr_shop'><th id='th_shop'>Mage items</th><th id='th_shop'>   Attack items</th><th id='th_shop'>Health items</th><th id='th_shop'>Attack Speed Items</th><th id='th_shop'>Special Items</th></tr>"
                    +"<tr><td id='td_shop'><img class='shop_item' src="+res.armor.magic[mag_l[0]].avatar+"></img><br><button class='shop_button' id='magic."+[mag_l[0]]+"'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack[att_l[0]].avatar+"></img><br><button class='shop_button' id='attack."+[att_l[0]]+"'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.health[def_l[0]].avatar+"></img><br><button class='shop_button' id='health.["+def_l[0]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack_speed[att_spd_l[0]].avatar+"></img><br><button class='shop_button' id='attack_speed.["+att_spd_l[0]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.epic_items[epic_l[0]].avatar+"></img><br><button class='shop_button' id='armor.epic_items.["+mag_l[0]+"]'>KUP</button></td></tr>"
                    +"<tr><td id='td_shop'><img class='shop_item' src="+res.armor.magic[mag_l[1]].avatar+"></img><br><button class='shop_button' id='magic."+[mag_l[1]]+"'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack[att_l[1]].avatar+"></img><br><button class='shop_button' id='attack."+[att_l[1]]+"'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.health[def_l[1]].avatar+"></img><br><button class='shop_button' id='health.["+def_l[1]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack_speed[att_spd_l[1]].avatar+"></img><br><button class='shop_button' id='attack_speed.["+att_spd_l[1]+"]'>KUP</button></td>"
                    +"<tr><td id='td_shop'><img class='shop_item' src="+res.armor.magic[mag_l[2]].avatar+"></img><br><button class='shop_button' id='magic."+[mag_l[2]]+"'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack[att_l[2]].avatar+"></img><br><button class='shop_button' id='attack."+[att_l[2]]+"'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.health[def_l[2]].avatar+"></img><br><button class='shop_button' id='health.["+def_l[2]+"]'>KUP</button></td><td id='td_shop'><img class='shop_item' src="+res.armor.attack_speed[att_spd_l[2]].avatar+"></img><br><button class='shop_button' id='attack_speed.["+att_spd_l[2]+"]'>KUP</button></td>"
            } 
            hero=document.getElementById("hero_name").innerText
            let bps=res[hero].backpack_space
        
            const possiblechoices=document.querySelectorAll('button')
            possiblechoices.forEach(possiblechoices=>possiblechoices.addEventListener('mouseover',(e)=>{
                userChoice=e.target.id
                console.log(userChoice)
                const okienko=document.createElement('div')
                okienko.setAttribute('id','shop_okienko')
                
                atack=res.armor.attack[1].attack
   
                okienko.innerHTML="Attack: "+atack+" <br>Magic: "+atack+" <br>Health: "+atack+"<br>Attack Speed: "+atack+""
                document.getElementById(userChoice).appendChild(okienko)
            }))
            possiblechoices.forEach(possiblechoices=>possiblechoices.addEventListener('mouseout',(p)=>{
                userChoice=p.target.id
                const okienko=document.getElementById('shop_okienko')
                okienko.remove()
            }))
        
        
            







            
        }


    }
    xhr.open('GET','staty.json',true)
    xhr.send()

}

function map(){window.location.href="map.php"}
function sell(){window.location.href="sell.php"}