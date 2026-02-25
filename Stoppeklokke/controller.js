

function startTimer(){
    klokkeur = setInterval(countTime, 1000);
    
 } 

 function pauseTimer(){
    clearInterval(klokkeur);   
    rundeTid.push(minutt + ":" + sekund);
    minutt = 0
    sekund = 0
    updateView()
 }




 function stopTimer(){ 
    clearInterval(klokkeur);
    minutt = 0
    sekund = 0
    rundeTid.length = 0
    updateView()
 }


 function countTime(){
    sekund += 1
    if(sekund === 60){
        minutt += 1
        sekund = 0
    }
    updateView()
 }