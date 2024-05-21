const hoverElement = document.querySelector('.hoverElement');
const displayElement = document.querySelector('.displayElement');
const hov = document.querySelector('.hov');
const dis = document.querySelector('.dis');
const dropOpen = document.querySelector('.drop-open');
const dropDown = document.querySelector('.drop-down');

dropOpen.addEventListener('click', () => {
    dropOpen.style.borderColor = 'black';
    if(dropDown.classList.contains('hidden')){
        dropDown.classList.remove('hidden');
    } else {
        dropDown.classList.add('hidden');
    };
});

dropOpen.addEventListener('mouseleave', () => {
    dropOpen.style.borderColor = ''
});

hov.addEventListener('mouseenter', () => {
    dis.style.display = 'block';
});
hov.addEventListener('mouseleave', () => {
    dis.style.display = 'none';
});

hoverElement.addEventListener('mouseenter', () => {
    displayElement.style.display = 'block';
});
hoverElement.addEventListener('mouseleave', () => {
    displayElement.style.display = 'none';
});