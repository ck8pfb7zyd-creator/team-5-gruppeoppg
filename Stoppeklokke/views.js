updateView()
 
 function updateView(){
        klokke.innerHTML = /*HTML*/ `

        
        <h1>Timer</h1>
        <h2>Runder</h2>
        <div>${minutt}:${sekund}</div>
        <br>
        <button onclick="startTimer()">Start</button>
        
        `
 } 
 

 