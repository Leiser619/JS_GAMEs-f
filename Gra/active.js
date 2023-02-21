hero=document.getElementById("hero_name").innerText
money=document.getElementById("money_value").innerText
avatar=document.getElementById("hero_image")
exp=document.getElementById("hero_exp").innerText
herolist=[]

herolist.push(hero)

var heroo=herolist[0]
var convert="bohaterowie/"+hero+".png";

function getJson(){
    xhr=new XMLHttpRequest()
    xhr.onload=function(){

        if(this.status===200){
            res=JSON.parse(this.responseText)
            //console.log(res[hero])
            function load_interface(){
                avatar.innerHTML ="<img src="+convert+" id='hero_image'></img>";
                //bps=backpack space
                let bps=res[hero].backpack_space
                //console.log(bps)
                let p=0
                while(p<bps){
                    const el = document.createElement('div')
                    el.classList.add('inventory_slot')
                    const box = document.getElementById('inventory_container');
                    box.appendChild(el);
                    p=p+1
                }
                document.getElementById('stats').innerHTML+="Health : "+res[hero].health+"<br>"
                document.getElementById('stats').innerHTML+="Magic : "+res[hero].magic+"<br>"
                document.getElementById('stats').innerHTML+="Defence : "+res[hero].defence+"<br>"
                document.getElementById('stats').innerHTML+="Attack speed : "+res[hero].attack_speed+"<br>"
                document.getElementById('stats').innerHTML+="Endurance : "+res[hero].endurance+"<br>"
                document.getElementById('stats').innerHTML+="Speed : "+res[hero].speed+"<br>"
                document.getElementById('stats').innerHTML+="Luck : "+res[hero].luck+"<br>"
                document.getElementById('stats').innerHTML+="Attack : "+res[hero].attack+"<br>"

            }
            
            
        }

        
        load_interface()
    }
    xhr.open('GET','staty.json',true)
    xhr.send()

}


   
getJson()
document.getElementById('money').innerHTML="TWOJE ZŁOTO :"+money

if(exp<25){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :1"

}
if(exp>25 && exp<50){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :2"

}
if(exp>50 && exp<100){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :3"

}
if(exp>100 && exp<200){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :4"

}
if(exp>200 && exp<400){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :5"

}
if(exp>400 && exp<800){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :6"

}
if(exp>800 && exp<1600){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :7"

}
if(exp>1600 && exp<3200){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :8"

}
if(exp>3200 && exp<6400){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :9"

}
if(exp>6400 && exp<12800){
    exp_place=document.getElementById('level').innerHTML="AKTUALNY POZIOM :10"

}


function map(){window.location.href='map.php'}
