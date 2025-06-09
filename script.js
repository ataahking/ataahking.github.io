// Simple JavaScript to toggle between sections
const menuButtons = document.querySelectorAll('.menu-btn');
const contentSections = document.querySelectorAll('.content-section');

// Function to show the appropriate section
function showSection(index) {
    contentSections.forEach((section, sectionIndex) => {
        section.style.display = sectionIndex === index ? 'block' : 'none';
    });
}

// Set up event listeners for the menu buttons
menuButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showSection(index);
    });
});

// Initialize the page to show the first section (posts) by default
document.addEventListener('DOMContentLoaded', () => {
    showSection(0); // Show the "posts" section by default
});