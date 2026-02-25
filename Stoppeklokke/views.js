updateView()
 
 function updateView(){
        klokke.innerHTML = /*HTML*/ `

        
        <h1>Timer</h1>
        <div>${minutt}:${sekund}</div>
        <h2>Runder</h2>
        ${rundeTid.map(tid => `<div>${tid}</div>`).join("")}
        <br>
        <button onclick="startTimer()">Start</button>
        <button onclick="pauseTimer()">Pause</button> 
        <button onclick="stopTimer()">Reset</button>
        
        `
 } 
 

 