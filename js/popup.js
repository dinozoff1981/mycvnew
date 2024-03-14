document.addEventListener("DOMContentLoaded", function() {
    const popups = document.querySelectorAll('.popup');
    const buttons = document.querySelectorAll('.open-popup');

    buttons.forEach((button, index) => {
        button.addEventListener("click", function() {
            popups[index].style.display = 'block';
        });
    });

    document.querySelectorAll(".close-btn").forEach((closeBtn) => {
        closeBtn.addEventListener("click", function() {
            popups.forEach((popup) => {
                popup.style.display = 'none';
            });
        });
    });
});