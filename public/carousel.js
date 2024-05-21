const nextIcon = `<i class="bi bi-chevron-right" style="font-size: 40px; color: rgb(80, 77, 77);"></i>`;
const prevIcon = `<i class="bi bi-chevron-left" style="font-size: 40px; color: rgb(206, 199, 199);"></i>`;

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
});