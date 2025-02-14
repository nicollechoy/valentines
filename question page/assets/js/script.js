const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const popupModal = document.getElementById('popupModal');
const thankYouPopup = document.getElementById('thankYouPopup');

let noClickCount = 0;
const maxNoClicks = 14;

// Handle "No" button click
noButton.onclick = function() {
    noClickCount++;

    // Shrink "No" button
    noButton.style.transform = `scale(${1 - noClickCount * 0.05})`;
    noButton.style.transition = "transform 0.3s ease";
    noButton.style.backgroundColor = "#f48fb1";

    // Grow "Yes" button
    yesButton.style.transform = `scale(${1 + noClickCount * 0.1})`;

    if (noClickCount === maxNoClicks) {
        // Show popup after 1 second
        setTimeout(() => {
            popupModal.style.display = "block";
        }, 1000);

        // Redirect to home page after 3 seconds
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 3000);
    }
};
