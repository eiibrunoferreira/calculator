function inserir(num) {
    document.querySelector('#viewfinder').value += num;
}

function clean() {
    document.querySelector('#viewfinder').value = "";
}

function back() {
    let visor = document.querySelector('#viewfinder').value;
    document.querySelector('#viewfinder').value = visor.substring(0, visor.length-1);
}

function somar() {
    let visor = document.querySelector('#viewfinder').value; 
    if(visor) {
        document.querySelector('#viewfinder').value = eval(visor);
    } else {
       document.querySelector('#viewfinder').value = "err..."
    }
}

document.addEventListener("keydown", function(e) {
    if(e.keyCode === 27) {
        document.querySelector('#viewfinder').value = "";
    } else if (e.keyCode === 8) {
        let visor = document.querySelector('#viewfinder').value;
        document.querySelector('#viewfinder').value = visor.substring(0, visor.length-1);
    } else if (e.key === "/") {
        document.querySelector('#viewfinder').value += "/";
    } else if (e.key === "*") {
        document.querySelector('#viewfinder').value += "*";
    } else if (e.key === "7") {
        document.querySelector('#viewfinder').value += "7";
    } else if (e.key === "8") {
        document.querySelector('#viewfinder').value += "8";
    } else if (e.key === "9") {
        document.querySelector('#viewfinder').value += "9";
    }else if (e.key === "-") {
        document.querySelector('#viewfinder').value += "-";
    } else if (e.key === "4") {
        document.querySelector('#viewfinder').value += "4";
    } else if (e.key === "5") {
        document.querySelector('#viewfinder').value += "5";
    } else if (e.key === "6") {
        document.querySelector('#viewfinder').value += "6";
    } else if (e.key === "+") {
        document.querySelector('#viewfinder').value += "+";
    } else if (e.key === "1") {
        document.querySelector('#viewfinder').value += "1";
    } else if (e.key === "2") {
        document.querySelector('#viewfinder').value += "2";
    } else if (e.key === "3") {
        document.querySelector('#viewfinder').value += "3";
    } else if (e.key === "Enter") {
        let visor = document.querySelector('#viewfinder').value; 
    if(visor) {
        document.querySelector('#viewfinder').value = eval(visor);
        } else {
       document.querySelector('#viewfinder').value = "err..."
        }
    } else if (e.key === "0") {
        document.querySelector('#viewfinder').value += "0";
    } else if (e.key === ".") {
        document.querySelector('#viewfinder').value += ".";
    }
});

let chk = document.getElementById('chk-mode')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-body');
    document.getElementById('content-calculator').classList.toggle('dark-calculator');
    document.getElementById('label').classList.toggle('dark-label');
    document.getElementById('ball-mode').classList.toggle('dark-ball');
    document.getElementById('direitos').classList.toggle('dark-direitos')
})