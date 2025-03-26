// Simple JavaScript to toggle between sections (optional for more interactive behavior)
const menuButtons = document.querySelectorAll('.menu-btn');
const contentDivs = document.querySelectorAll('.content');

menuButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contentDivs.forEach((div, divIndex) => {
            div.style.display = divIndex === index ? 'block' : 'none';
        });
    });
});