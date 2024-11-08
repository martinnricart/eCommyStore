(function() {
    //===== Preloader
    window.onload = function () {
        setTimeout(fadeout, 500);
    };

    function fadeout() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        preloader.style.display = 'none';
    }

    // Sticky Navbar and Back to Top Button
    const headerNavbar = document.querySelector(".navbar-area");
    const backToTop = document.querySelector(".scroll-top");

    window.onscroll = function () {
        const sticky = headerNavbar.offsetTop;
        headerNavbar.classList.toggle("sticky", window.pageYOffset > sticky);
        backToTop.style.display = (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) ? "flex" : "none";
    };

    // Smooth Scroll for Navbar Links
    const pageLinks = document.querySelectorAll('.page-scroll');
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Cambiado para tener más control sobre el desplazamiento
            });
        });
    });

    // Close Navbar Collapse on Link Click
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    pageLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show');
        });
    });

    navbarToggler.addEventListener('click', () => {
        navbarToggler.classList.toggle("active");
    });

    // WOW.js Initialization
    new WOW().init();

    // Counter Up Initialization
    const cu = new counterUp({
        start: 0,
        duration: 2000,
        intvalues: true,
        interval: 100,
        append: " ",
    });
    cu.start();
})();
