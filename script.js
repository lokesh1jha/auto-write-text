const text = "I am Learnig MERN full stack...!!!";

let index = 0;

function writeText() {
    document.body.innerHTML = text.slice(0, index);

    index++;

    if(index > text.length){
        index = 0;
    }
}

setInterval(writeText, 100);