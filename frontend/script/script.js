document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.querySelector('.return');
    if (returnButton) {
        returnButton.addEventListener('click', function() {
            window.location.href = '/'; 
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.querySelector('.Indev');
    if (returnButton) {
        returnButton.addEventListener('click', function() {
            window.location.href = '/page/InDev.html'; 
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.querySelector('.ViewProject');
    if (returnButton) {
        returnButton.addEventListener('click', function() {
            window.location.href = '/page/ViewProject.html'; 
        });
    }
});