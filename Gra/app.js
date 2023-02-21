function imageChange() {
    var choice = document.getElementById("hero").value;
    var convert=choice+".png";
    document.getElementById("avatar").innerHTML ="<img src="+convert+" id='dupcia'></img>";
  }

  function popup(){
    alert("Taki login juz istnieje!")

  }