// Mobile Menu Section
const menu = document.querySelector('.nav-links');
const menuBtn = document.querySelector('.menu-open');
const closeBtn = document.querySelector('.menu-close');


menuBtn.addEventListener('click', () => {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
})


// Play Button Section
const video = document.querySelector('.video-container video');
const playButton = document.getElementById('playButton');
const playIconPath = `
    <svg fill="none" height="160" viewBox="0 0 160 160" width="160" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd"
              d="M80 6.66553C39.4991 6.66553 6.66663 39.498 6.66663 79.9989C6.66663 120.5 39.4991 153.332 80 153.332C120.501 153.332 153.333 120.5 153.333 79.9989C153.333 39.498 120.501 6.66553 80 6.66553ZM63.9982 54.1061C63.3333 54.9943 63.3333 56.5852 63.3333 59.7671V100.229C63.3333 103.411 63.3333 105.002 63.9982 105.89C64.5777 106.664 65.4647 107.149 66.4291 107.218C67.5358 107.297 68.8741 106.436 71.5506 104.716L103.021 84.4845C105.344 82.9914 106.505 82.2449 106.906 81.2956C107.257 80.4662 107.257 79.5303 106.906 78.7008C106.505 77.7516 105.344 77.005 103.021 75.5119L71.5507 55.2808C68.8741 53.5602 67.5358 52.6999 66.4291 52.7789C65.4647 52.8478 64.5777 53.3321 63.9982 54.1061Z"
              fill="#191B1F" fill-rule="evenodd"/>
    </svg>
`;
const pauseIconPath = `
    <svg fill="none" height="160" viewBox="0 0 160 160" width="160" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" 
              d="M80 6.66553C39.4991 6.66553 6.66663 39.498 6.66663 79.9989C6.66663 120.5 39.4991 153.332 80 153.332C120.501 153.332 153.333 120.5 153.333 79.9989C153.333 39.498 120.501 6.66553 80 6.66553ZM69.9999 60C69.9999 58.1619 69.9999 57.2428 70.3327 56.6307C70.6181 56.0992 71.0991 55.6182 71.6306 55.3328C72.2427 55 73.1618 55 74.9999 55H85C86.838 55 87.7571 55 88.3692 55.3328C88.9007 55.6182 89.3817 56.0992 89.6671 56.6307C89.9999 57.2428 89.9999 58.1619 89.9999 60V100C89.9999 101.838 89.9999 102.757 89.6671 103.369C89.3817 103.9 88.9007 104.381 88.3692 104.667C87.7571 105 86.838 105 85 105H74.9999C73.1618 105 72.2427 105 71.6306 104.667C71.0991 104.381 70.6181 103.9 70.3327 103.369C69.9999 102.757 69.9999 101.838 69.9999 100V60Z"
              fill="#191B1F" fill-rule="evenodd"/>
    </svg>
`;

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.innerHTML = pauseIconPath;
    } else {
        video.pause();
        playButton.innerHTML = playIconPath;
    }
});

// Optional: Update button icon based on video play/pause events
video.addEventListener('play', () => {
    playButton.innerHTML = pauseIconPath;
});

video.addEventListener('pause', () => {
    playButton.innerHTML = playIconPath;
});

