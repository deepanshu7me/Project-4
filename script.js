const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");
const closeicon = document.getElementById("closeicon");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
})
closeicon.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
})
navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
    })
})



const swiper = new Swiper('.swiper', {

    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20

        },
        748: {
            slidesPerView: 3,
            spaceBetween: 30

        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40

        }
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


document.addEventListener('contextmenu', event => {
    event.preventDefault();
});



const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up")
    scrollUpBtn.classList.toggle("bottom-4", this.scrollY >= 250);
    scrollUpBtn.classList.toggle("-bottom-1/2", this.scrollY < 250);


}

window.addEventListener("scroll", scrollUp)



const activeLink = ()=>{
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")

    let current = "home"

    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        if (this.scrollY>=sectionTop-60) {
            current=section.getAttribute("id")
            
        }
    })
    navLinks.forEach(item=>{
        item.classList.remove("active")
        if (item.href.includes(current)) {
            item.classList.add("active")
            
        }
    })
}



window.addEventListener("scroll",activeLink)





const scrollHeader=()=>{
    const navbar = document.getElementById("navbar")
    if (this.scrollY>=200) {
        navbar.classList.add("shadow-myboxshadow")
        
    }
    else{
        navbar.classList.remove("shadow-myboxshadow")
    }
}

window.addEventListener("scroll",scrollHeader)








const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:1500,
    delay:300,
    reset:true
})
sr.reveal(".hero_top,.ingredient_top,.blog_top")
sr.reveal(".hero_image",{scale:0.5})
sr.reveal(".heroutline_1,.heroutline_2,.summer",{scale:0.5, distance:"0px",delay:1000})
sr.reveal(".heroleaf_1,.heroleaf_2",{origin:"right",delay:1500})
sr.reveal(".heroleaf_3",{origin:"left",delay:1500})
sr.reveal(".heroleaf_4",{origin:"bottom",delay:1500})
sr.reveal(".summer",{scale:0.5,interval:100})


sr.reveal(".featureleft,.promocontent,.ingredient_left",{origin:"left"})
sr.reveal(".featureright,.promoimage,.ingredient_right",{origin:"right"})

sr.reveal(".flavor_item,.blog_content,.newsletterbox",{interval:100})
