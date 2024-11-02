function calculateParallelogram (){
    // console.log('parallelo');
    // get parallelogram base value
    const paralleloBaseInput = document.getElementById('parallelogram-base');
    const paralleloBaseText = paralleloBaseInput.value;
    const base = parseFloat(paralleloBaseText);
    console.log(base);

    // get parallelogram height value
    const paralleloHeightInput = document.getElementById('parallelogram-height');
    const paralleloHeightText = paralleloHeightInput.value;
    const height = parseFloat(paralleloHeightText);
    console.log(height);

    // caculate parallelogram area
    const area = base * height;
    console.log(area);

    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;

};