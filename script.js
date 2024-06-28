document.addEventListener("DOMContentLoaded", function() {
    const house = document.querySelector('.house');
    const antennaTop = document.querySelector('.antenna-top-img');
    const cablePath = document.getElementById('cable-path');

    function updateCablePath() {
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
    }

    // Initial update when the page loads
    updateCablePath();

    // Update the cable path on window resize
    window.addEventListener('resize', updateCablePath);
});


document.addEventListener("DOMContentLoaded", function() {
    const boyImg = document.querySelector('.boy-img');
    const antenna = document.querySelector('.antenna');
    const tvVideo = document.getElementById('tv-video');

    // Flag to track if the antenna is rotated
    let antennaRotated = false;

    boyImg.addEventListener('click', function() {
        // Toggle antenna rotation
        antennaRotated = !antennaRotated;

        // Generate a random direction (0 for left, 1 for right)
        const direction = Math.random() < 0.5 ? 'left' : 'right';

        // Apply the animation based on the direction
        antenna.style.animationName = direction === 'left' ? 'rotateLeft' : 'rotateRight';
        antenna.style.animationDuration = '0.5s';
        antenna.style.animationFillMode = 'forwards';

        // Change the video source based on antenna rotation
        if (antennaRotated) {
            tvVideo.src = "https://www.youtube.com/embed/5646_C7sIng?autoplay=1&controls=0&loop=1&mute=0";
        } else {
            tvVideo.src = "https://www.youtube.com/embed/Dkkp4KfdGPY?autoplay=1&controls=0&loop=1&mute=0";
        }

        // Reset animation and video source after animation ends
        antenna.addEventListener('animationend', function() {
            antenna.style.animationName = 'none';
            tvVideo.style.filter = 'brightness(100%)'; // Reset brightness effect
        }, { once: true });
    });
});


