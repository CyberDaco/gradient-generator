const css = document.querySelector('h3');
const colour1 = document.querySelector('.colour1');
const colour2 = document.querySelector('.colour2');
const colourPicker = document.querySelector('.colour-picker');
const body = document.querySelector('body');
const degreeInput = document.querySelector('.degrees');
const degreeDisplay = document.querySelector('.angle > p > span');

const update = (e) => {
    const backgroundGradient = `linear-gradient(${degreeInput.value}deg , ${colour1.value} , ${colour2.value})`;
    css.textContent = backgroundGradient + ';';
    body.style.background = backgroundGradient;
    degreeDisplay.textContent = `${degreeInput.value}`;
    console.log(`Degrees: ${degreeInput.value}deg`)
}

colourPicker.addEventListener('input',update);
// colour2.addEventListener('input',updateH3);