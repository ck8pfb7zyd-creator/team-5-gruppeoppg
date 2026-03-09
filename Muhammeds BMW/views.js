friendEvent()
 
updateView()

function updateView(){


  
    document.getElementById('app').innerHTML = /*HTML*/`
    
    <div class="box">
    <h3> Muhammeds BMW </h3>
    
    ${greeting1()}
    <div class="container"></div>
    <div id="bar" class="bar"></div>
    </div>
    ${kebabCoin}
    
     <img class="bil" src="bilder/bil.png" style='position: relative; left: ${carLeft}px;'>
    <div>
    <img class="imgKebab" src="bilder/kebab1.png" onclick="pickUpItems()"></div>
         
    
       `;
}



document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft' ) {
    carLeft -= 10;
    
  } else if (event.key === 'ArrowRight' && carLeft < window.innerWidth - 50) {
    carLeft += 10;
    
  }

  
  updateView()
});   

