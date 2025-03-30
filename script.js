let i = 0;
let n = 0;
let cArray = ["red", "yellow", "green"];

function trafficLight() {
    let light = document.getElementsByClassName('light');

    for(let j = 0; j < light.length; j++) {
        light[j].style.background = "rgb(107, 106, 106)";
        light[j].innerHTML = "";
    }

    light[i].style.background = cArray[i];

    if(i<light.length) {
        if(n <=3) {
            light[i].innerHTML = n;
            n++;
        }
        if(n === 4) {
            i++;
            n=0;
        }
  
    }
    if(i === 3) {
        i = 0;
    }
    
   

}
setInterval (trafficLight, 1000);
