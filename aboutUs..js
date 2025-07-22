document.addEventListener('DOMContentLoaded', (event) => {
    const openPopupBtn = document.getElementById('my-account-btn');
    const closePopupButton= document.getElementById('closePopupButton');
    const signIn= document.getElementById('signIn');

    openPopupBtn.addEventListener('click', () => {
        signIn.style.display = 'block';
    });

    
    closePopupButton.addEventListener('click', () => {
        signIn.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === signIn) {
            signIn.style.display = 'none';
        }
    });
});