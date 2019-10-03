const css = document.querySelector('h3');
const [colour1, colour2] = document.querySelectorAll('.colour');
const colourPicker = document.querySelector('.colour-picker');
const body = document.querySelector('body');
const degreeInput = document.querySelector('.degrees');
const degreeDisplay = document.querySelector('.angle > p > span');

const update = (e) => {
    const backgroundGradient = `linear-gradient(${degreeInput.value}deg , ${colour1.value} , ${colour2.value})`;
    css.textContent = backgroundGradient + ';';
    body.style.background = backgroundGradient;
    degreeDisplay.textContent = `${degreeInput.value}`;
}

colourPicker.addEventListener('input',update);
// colour2.addEventListener('input',updateH3);