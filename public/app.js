class Dropdown{
    constructor(container){
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    init(){
        this.trigger.addEventListener('click', () => {
            this.content.classList.toggle('hidden')
        });
    };
}

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

const trigger_1 = document.querySelector('.trigger-1');
const content_1 = document.querySelector('.content-1');
trigger_1.addEventListener('click', () => {
    content_1.classList.toggle('hidden');
});