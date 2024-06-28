document.addEventListener("DOMContentLoaded", function() {
    const house = document.querySelector('.house');
    const antennaTop = document.querySelector('.antenna-top-img');
    const cablePath = document.getElementById('cable-path');

    const houseRect = house.getBoundingClientRect();
    const antennaTopRect = antennaTop.getBoundingClientRect();

    const startX = antennaTopRect.left + antennaTopRect.width / 2;
    const startY = antennaTopRect.bottom;
    const endX = houseRect.left + houseRect.width / 2;
    const endY = houseRect.top + houseRect.height / 2;

    const pathData = `
        M ${startX} ${startY}
        C ${startX} ${startY + 50}, ${endX} ${endY - 50}, ${endX} ${endY}
    `;

    cablePath.setAttribute('d', pathData);
});

document.addEventListener("DOMContentLoaded", function() {
    const boyImg = document.querySelector('.boy-img');
    const antenna = document.querySelector('.antenna');

    boyImg.addEventListener('click', function() {
        // Generate a random direction (0 for left, 1 for right)
        const direction = Math.random() < 0.5 ? 'left' : 'right';

        // Apply the animation based on the direction
        antenna.style.animationName = direction === 'left' ? 'rotateLeft' : 'rotateRight';
        antenna.style.animationDuration = '0.5s';
        antenna.style.animationFillMode = 'forwards';

        // Reset animation after it finishes
        antenna.addEventListener('animationend', function() {
            antenna.style.animationName = 'none';
        }, { once: true });
    });
});


