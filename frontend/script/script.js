document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.querySelector('.return');
    if (returnButton) {
        returnButton.addEventListener('click', function() {
            window.location.href = '/'; 
        });
    }
});
// This script adds functionality to the "Retour" button, allowing users to navigate back to the homepage when clicked