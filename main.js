"use strict";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", () =>{
    const cellObjects = document.getElementsByClassName("cell");
    let cells = [].slice.call(cellObjects);

    const figures = ['tl', 'tr', 'bl', 'br'];
    const colors = ['#C83E4D', '#F4B860', '#F4D6CC', '#4A5859', '#F37748', '#ECC30B'];
    const generateButton = document.getElementById("generate");

    cells.forEach(cell => {
        let isRandom = getRandomInt(6);
        if(isRandom === 0){
            cell.classList.add("all");
        }else if(isRandom === 1){
            cell.classList.add("none");
        }else{
            let addAnother = 1;
            while(addAnother === 1){
                let index = getRandomInt(4);
                cell.classList.add(figures[index]);
                addAnother = getRandomInt(2);
            }
        }
    });
    cells.forEach(cell => {
        cell.style.backgroundColor = colors[getRandomInt(6)];
    });
    generateButton.addEventListener("click", ()=>{
        cells.forEach(cell => {
            cell.className = 'cell';
            let isRandom = getRandomInt(6);
            console.log(isRandom);
            if(isRandom === 0){
                cell.classList.add("all");
            }else if(isRandom === 1){
                cell.classList.add("none");
            }else{
                let addAnother = 1;
                while(addAnother === 1){
                    let index = getRandomInt(4);
                    cell.classList.add(figures[index]);
                    addAnother = getRandomInt(2);
                }
            }
        });
        cells.forEach(cell => {
            cell.style.backgroundColor = colors[getRandomInt(6)];
        });
    });
    document.addEventListener("keydown", (event)=>{
        if(event.keyCode === 32){
            event.preventDefault();
            cells.forEach(cell => {
                cell.className = 'cell';
                let isRandom = getRandomInt(6);
                console.log(isRandom);
                if(isRandom === 0){
                    cell.classList.add("all");
                }else if(isRandom === 1){
                    cell.classList.add("none");
                }else{
                    let addAnother = 1;
                    while(addAnother === 1){
                        let index = getRandomInt(4);
                        cell.classList.add(figures[index]);
                        addAnother = getRandomInt(2);
                    }
                }
            });
            cells.forEach(cell => {
                cell.style.backgroundColor = colors[getRandomInt(6)];
            });
        }
    });
});