/*const links = document.querySelectorAll('li');
for(const link of links){
    link.addEventListener('click', (event)=>{
        console.log(event.target);
        event.target.style.color = '#00cc00';
        event.target.textConent= 'Jau išmokau'; //innerHTML vietoj textContent gai buti
    })
}*/

//Div generavimas

for(let i=0;i<4;i++){
    let row = document.createElement('div');
    row.className = "row";
    for(let j=0;j<4;j++){
        const block = document.createElement('div');
        block.style.height = "200px";
        block.style.margin = "5px";
        block.className = "col";
        block.style.backgroundColor = "#dd8877";
        row.appendChild(block);
    }
    document.querySelector('section').appendChild(row);
}

//Random funkcija,kuri turi grazinti random spalva
//pvz.: rgb(255,123,12)

//Random skaiciaus spalvos funkcija

const colorNumber = ()=>{
    return Math.floor(Math.random()*255); 
}

console.log(colorNumber())

//Random fono spalvos funkcija

const randomBackground = ()=>{
    return `rgb(${colorNumber()},${colorNumber()},${colorNumber()})`

}

console.log(randomBackground())

for(let div of document.querySelectorAll('.row div')){
    div.onclick = (e)=>{
        e.target.style.backgroundColor= randomBackground();
    }
}