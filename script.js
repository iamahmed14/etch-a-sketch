const container = document.querySelector('.container');
const slider = document.querySelector('input');
const caption = document.querySelector('p');
const clear = document.querySelector('button');
caption.innerHTML = slider.value + " x " + slider.value;

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function createGrid(size) {
    
    for(let i=0; i<size; i++) {
        const row = document.createElement('div');
        row.style.height = 500/size + "px";
        row.style.display = "flex";
        
        for(let j=0; j<size; j++) {
            const cell = document.createElement('div');
            cell.style.height = "100%";
            cell.style.flex = "1";
            cell.addEventListener('mouseover', () => cell.style.backgroundColor = randomColor());
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
createGrid(slider.value);

slider.oninput = () => caption.innerHTML = slider.value + " x " + slider.value;

slider.onchange = () => {
    container.innerHTML = "";
    createGrid(slider.value);
};

clear.onclick = () => {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = "white");
};
