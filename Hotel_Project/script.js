// Aniamtions->Start

document.addEventListener('DOMContentLoaded', () => {
    const animateElement = (el, animationConfig) => {
        el.animate(animationConfig.keyframes, animationConfig.options);
    };

    const animationConfigs = {
        title: {
            keyframes: [
                { opacity: 0, transform: 'translateX(10%)' },
                { opacity: 1, transform: 'translateX(0)' }
            ],
            options: {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease-in-out'
            }
        },
        fourthSection: {
            keyframes: [
                { opacity: 0, transform: 'translateY(10%)' },
                { opacity: 1, transform: 'translateY(0)' }
            ],
            options: {
                duration: 1000,
                fill: 'forwards',
                easing: 'ease-in-out'
            }
        }
    };

    const firstSectionElements = document.querySelectorAll('.first_section .hotel-title, .first_section .title, .first_section .tagline, .first_section .copyright, .first_section .start');
    const secondSectionItems = document.querySelectorAll('.second_section .item, .second_section .title .second_section .copyright');
    const thirdSectionElements = document.querySelectorAll('.third_section .contact_div, .third_section .btn-orange, .third_section .circle');
    const fourthSectionElements = document.querySelectorAll('.fourth_section .left_part .sale, .fourth_section .left_part .subtitle_sale, .fourth_section .right_part');
    const fifthSectionElements = document.querySelectorAll('.fifth_section .image-container, .fifth_section .description, .fifth_section .circle_round, .fifth_section .orange_shape, .fifth_section .copyright');
    const contactElements = document.querySelectorAll('.contact .title');

    const handleAnimation = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                let config;
                if (el.closest('.second_section')) {
                    config = animationConfigs.title;
                } else if (el.closest('.fourth_section')) {
                    config = animationConfigs.fourthSection;
                } else {
                    config = animationConfigs.title;
                }

                animateElement(el, config);
            }
        });
    };

    const observer = new IntersectionObserver(handleAnimation, {
        root: null,
        rootMargin: '0px',
        threshold: 0.75
    });

    firstSectionElements.forEach(el => observer.observe(el));
    secondSectionItems.forEach(el => observer.observe(el));
    thirdSectionElements.forEach(el => observer.observe(el));
    fourthSectionElements.forEach(el => observer.observe(el));
    fifthSectionElements.forEach(el => observer.observe(el));
    contactElements.forEach(el => observer.observe(el));
});

// Aniamtions->End

// Menu Click->Start

document.getElementById("svg").addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const body = document.body;

    if (menu.style.display === "block") {
        menu.style.display = "none";
        body.classList.remove("no-scroll");
    } else {
        menu.style.display = "block";
        body.classList.add("no-scroll");
    }


    event.stopPropagation();
});


document.getElementById("svg_close").addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const body = document.body;

    menu.style.display = "none";
    body.classList.remove("no-scroll");


    event.stopPropagation();
});


document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const body = document.body;

    if (menu.style.display === "block" && !menu.contains(event.target) && !document.getElementById("svg").contains(event.target)) {
        menu.style.display = "none";
        body.classList.remove("no-scroll");
    }
});


// Menu Click->End