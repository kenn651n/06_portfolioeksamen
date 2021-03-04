window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#Cloud_container").classList.add("pos2");
    document.querySelector("#Cloud_container2").classList.add("pos");
    document.querySelector("#Cloud_container3").classList.add("pos4");
    document.querySelector("#Cloud_container4").classList.add("pos3");
    document.querySelector("#Cloud_container5").classList.add("pos5");
    document.querySelector("#Cloud_container6").classList.add("pos6");

    document.querySelector("#Cloud_container7").classList.add("pos7");
    document.querySelector("#Cloud_container8").classList.add("pos8");
    document.querySelector("#Cloud_container9").classList.add("pos9");

    document.querySelector("#Cloud_container10").classList.add("pos10");
    document.querySelector("#Cloud_container11").classList.add("pos11");
    document.querySelector("#Cloud_container12").classList.add("pos12");


    //Starter fanimation på containere
    document.querySelector("#Cloud_container").classList.add("slide");
    document.querySelector("#Cloud_container2").classList.add("slide");
    document.querySelector("#Cloud_container3").classList.add("slide");
    document.querySelector("#Cloud_container4").classList.add("slide");
    document.querySelector("#Cloud_container5").classList.add("slide");
    document.querySelector("#Cloud_container6").classList.add("slide");
    document.querySelector("#Cloud_container7").classList.add("slide2");
    document.querySelector("#Cloud_container8").classList.add("slide2");
    document.querySelector("#Cloud_container9").classList.add("slide2");
    document.querySelector("#Cloud_container10").classList.add("slide2");
    document.querySelector("#Cloud_container11").classList.add("slide2");
    document.querySelector("#Cloud_container12").classList.add("slide2");

}


var navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        //toogle nav
        nav.classList.toggle('nav-active');
        nav.classList.remove('hidden');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animaition) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();




document.querySelector("#Cloud_container7").addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.querySelector("#Cloud_container8").addEventListener('click', () => {
    window.location.href = 'om.html';
});

document.querySelector("#Cloud_container9").addEventListener('click', () => {
    window.location.href = 'Portfolio.html';
});



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
