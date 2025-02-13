const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const thankYouMessage = document.getElementById('thankYouMessage');
const popupModal = document.getElementById('popupModal');
const thankYouPopup = document.getElementById('thankYouPopup');

// Initialize click counts for each button
let yesClickCount = 0;
let noClickCount = 0;

// Maximum number of "No" button clicks before showing the popup modal
const maxNoClicks = 14;

// Handle "Yes" button click
yesButton.onclick = function() {
    yesClickCount++;
    yesButton.style.transform = `scale(${1 + yesClickCount * 0.1})`;
    yesButton.style.transition = "transform 0.3s ease";
    yesButton.style.backgroundColor = "#e81e63";

    // Show the "Thank you" popup instead of redirecting
    thankYouPopup.style.display = "block";

    // Hide the popup after 2 seconds
    setTimeout(() => {
        thankYouPopup.style.display = "none"; // Hide the thank you popup
    }, 2000);
};

// Handle "No" button click
noButton.onclick = function() {
    noClickCount++;

    // Apply shrinking effect to "No" button
    noButton.style.transform = `scale(${1 - noClickCount * 0.05})`;
    noButton.style.transition = "transform 0.3s ease";
    noButton.style.backgroundColor = "#f48fb1";

    // Apply growth effect to "Yes" button
    yesButton.style.transform = `scale(${1 + noClickCount * 0.1})`;

    if (noClickCount === maxNoClicks) {
        // After 14th click, show the popup and then redirect after 3 seconds
        setTimeout(() => {
            popupModal.style.display = "block";  // Show the modal popup
        }, 1000);  // Delay the popup by 1 second

        // After showing the popup for 3 seconds, redirect to the landing page
        setTimeout(() => {
            window.location.href = "../index.html"; // Go back to the landing page
        }, 3000);  // After 3 seconds
    }
};
