document.addEventListener('DOMContentLoaded', () => {
    // Example: Toggle dark mode
    const toggleButton = document.querySelector('#toggle-dark-mode');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('bg-white');
        document.body.classList.toggle('text-black');
    });
});
