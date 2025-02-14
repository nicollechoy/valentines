// Add event listeners to images to navigate to question page
const polaroids = document.querySelectorAll('.polaroid');

polaroids.forEach(polaroid => {
    polaroid.addEventListener('click', () => {
        window.location.href = '/question/index.html'; // Fixed the path
    });
});
