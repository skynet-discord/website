document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    // Меню-бургер для мобильных устройств
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Закрытие меню при клике на ссылку
    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
