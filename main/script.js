document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById('logoutButton');
    let activityTimer;

    const resetTimer = () => {
        clearTimeout(activityTimer);
        activityTimer = setTimeout(() => {
            alert('คุณไม่มีการใช้งานเป็นเวลา 5 นาที จะกลับสู่หน้าหลัก');
            localStorage.removeItem('isLoggedIn');
            window.location.replace('../index.html');
        }, 5 * 60 * 1000); 
    };

    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keypress', resetTimer);
    document.addEventListener('scroll', resetTimer);

    resetTimer();

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        clearTimeout(activityTimer);
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.replace('../index.html');
        }, 800);
    });
});