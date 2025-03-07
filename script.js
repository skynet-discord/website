document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
});