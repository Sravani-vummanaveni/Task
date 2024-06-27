let count = 1;
function addPhotoInputs() {
    count++;
    const photoDiv = document.createElement('div');
    photoDiv.innerHTML = `
        <label for="W${count}">Width (W):</label>
        <input type="number" id="W${count}" name="W" required>
        <label for="H${count}">Height (H):</label>
        <input type="number" id="H${count}" name="H" required>
    `;
    document.getElementById('photos').appendChild(photoDiv);
}

document.getElementById('photoInfo').addEventListener('submit', function(event) {
    event.preventDefault();
    const L = parseInt(document.getElementById('L').value);
    const N = parseInt(document.getElementById('N').value);
    const results = document.getElementById('results');
    results.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        const W = parseInt(document.getElementById(`W${i}`).value);
        const H = parseInt(document.getElementById(`H${i}`).value);
        
        let result;
        if (W < L || H < L) {
            result = "UPLOAD ANOTHER";
        } else if (W === H) {
            result = "ACCEPTED";
        } else {
            result = "CROP IT";
        }
        
        const resultItem = document.createElement('li');
        resultItem.textContent = `${result}`;
        results.appendChild(resultItem);
    }
});
