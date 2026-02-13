let slot1 = ''
let slot2 = ''
let slot3 = ''


function putItemInSlot(item){

    if (item === "potion"){
        putItem(`<img src="potion.png" class="item" alt="potion">`)
    }
    else if (item === "sword"){
        putItem(`<img src="https://img.freepik.com/premium-psd/8bit-pixel-art-sword-transparent-background_1020729-4063.jpg?w=2000" class="item" alt="sword">`)
    }
    else{
        console.log("feil item type")
    }
    document.getElementById("inventory").innerHTML = /*HTML*/`
    <div id="slot1" class="slot">${slot1}</div>
    <div id="slot2" class="slot">${slot2}</div>
    <div id="slot3" class="slot">${slot3}</div>
    `;
}

function putItem(image){
    if(slot1 ==''){
        slot1 = image
    }
    else if(slot2 ==''){
        slot2 = image
    }
    else if(slot3 ==''){
        slot3 = image
    }

}

