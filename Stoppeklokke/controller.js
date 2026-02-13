

function startTimer(){
    timer = setInterval(countTime, 1000);

    

    
 } 


 function countTime(){
    sekund += 1
    if(sekund === 60){
        minutt += 1
        sekund = 0
    }
    updateView()
 }