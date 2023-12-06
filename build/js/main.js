const initApp = () => {
    const hamBtn = document.getElementById('ham-menu-btn');
    const mobileViewBtn = document.getElementById('mobile-view');

    const toggleMenu = () => {
        mobileViewBtn.classList.toggle('hidden');
        mobileViewBtn.classList.toggle('flex');
        hamBtn.classList.toggle('toggle-btn');
    };

    [hamBtn, mobileViewBtn].forEach(btn => btn.addEventListener('click', toggleMenu));

};

document.addEventListener('DOMContentLoaded', initApp);