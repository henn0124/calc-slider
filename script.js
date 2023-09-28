const slider = document.getElementById('slider');
const yValueDisplay = document.getElementById('yValue');
const xInput = document.getElementById('xInput');
const zResult = document.getElementById('zResult');

// Function to update Y value when slider changes
slider.addEventListener('input', function () {
    const y = parseInt(slider.value);
    yValueDisplay.textContent = y;
    updateZ();
});

// Function to update Z value when X or Y changes
function updateZ() {
    const x = parseInt(xInput.value);
    const y = parseInt(slider.value);
    const z = x * y;
    zResult.value = z;
}

// Event listener for X input
xInput.addEventListener('input', updateZ);

// Initial update
updateZ();

