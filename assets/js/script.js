// Add event listeners to images if needed
const polaroids = document.querySelectorAll('.polaroid');

polaroids.forEach(polaroid => {
    polaroid.addEventListener('click', () => {
        window.location.href = 'question.html'; // Go to the question page
    });
});
