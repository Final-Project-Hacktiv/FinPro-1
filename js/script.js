const textSlideshow = [
    {
        prev: 1,
        title: "Best Price",
        data: "NEW PRODUCT",
        next: 1,
    },
    {
        prev: 1,
        title: "Best Offer",
        data: "NEW SEASON",
        next: 1,
    }
];

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const slideItem = document.getElementById('slide-item');

function showItem(index) {
    const title = document.createElement('p');
    const data = document.createElement('p');

    title.id = "title";
    data.id = "data";

    title.innerText = textSlideshow[index].title;
    data.innerText = textSlideshow[index].data;
    slideItem.append(title, data);
}

document.addEventListener('DOMContentLoaded', () => {
    showItem(0);
});


btnPrev.addEventListener('click', () => {
    const title = document.getElementById('title');
    const data = document.getElementById('data');
    slideItem.removeChild(title);
    slideItem.removeChild(data);
    showItem(0);
});

btnNext.addEventListener('click', () => {
    const title = document.getElementById('title');
    const data = document.getElementById('data');
    slideItem.removeChild(title);
    slideItem.removeChild(data);
    showItem(1);
});