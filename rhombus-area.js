// function calculateRhombusArea(){
//     const baseRadius = getInputValueById('rhombus-base');
//     const heightRadius = getInputValueById('rhombus-height');
//     const area = 0.5 * baseRadius * heightRadius;
//     setInnerTextById('rhombus-area', area)
// }


function calculateRhombusArea(){
    const base = getInputValueById('rhombus-base');
    const height = getInputValueById('rhombus-height');
    // console.log(perimeter, apothem);
    const area = 0.5 * base * height;
    setInnerTextById('rhombus-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}

function setInnerTextById (elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}