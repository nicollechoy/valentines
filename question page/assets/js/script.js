const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const popupModal = document.getElementById('popupModal');
const thankYouPopup = document.getElementById('thankYouPopup');

// Handle "Yes" button click
yesButton.onclick = function() {
    // Redirect to the "yes" page
    window.location.href = "../../../yes/index.html"; // Change to your actual Yes page URL
};

// Handle "No" button click
let noClickCount = 0;
const maxNoClicks = 14;

noButton.onclick = function() {
    noClickCount++;

    // Apply shrinking effect to "No" button
    noButton.style.transform = `scale(${1 - noClickCount * 0.05})`;
    noButton.style.transition = "transform 0.3s ease";
    noButton.style.backgroundColor = "#f48fb1";

    // Apply growth effect to "Yes" button
    yesButton.style.transform = `scale(${1 + noClickCount * 0.1})`;

    if (noClickCount === maxNoClicks) {
        // Show the popup after 1 second
        setTimeout(() => {
            popupModal.style.display = "block";
        }, 1000);

        // Redirect to the landing page after 3 seconds
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 3000);
    }
};
