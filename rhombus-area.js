function calculateRhombusArea(){
    const baseRadius = getInputValueById('rhombus-base');
    const heightRadius = getInputValueById('rhombus-height');
    const area = 0.5 * baseRadius * heightRadius;
    setInnerTextById('rhombus-area', area);
}