const refreshBtn = document.querySelector('.refresh__btn');
const colorBoxes = document.querySelector(".color__boxes");

refreshBtn.addEventListener('click', generateColors);

let maxColorPallete = 30;

function generateColors() {
    colorBoxes.innerHTML = "";

  for (let i = 0; i < maxColorPallete; i++) {
    let randomHexColor = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHexColor = `#${randomHexColor.padStart(6, '0')}`;

    let color = document.createElement("div");
    color.classList.add("color");
    color.innerHTML = `<div class="color__box" style="background:${randomHexColor}"></div>
    <p class="color__value">${randomHexColor}</p>`;

    color.addEventListener("click",()=>copyColor(color,randomHexColor));
    colorBoxes.appendChild(color);

  }
}
generateColors();

const copyColor =(ele,cValue)=>{
    const hexColorValue = ele.querySelector(".color__value");
    navigator.clipboard.writeText(cValue);
    hexColorValue.innerHTML = "COPIED";
    setTimeout(()=>{
        hexColorValue.innerHTML =cValue;
    },1000)
}
