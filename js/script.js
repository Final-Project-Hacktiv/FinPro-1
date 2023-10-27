const textSlideshow = [
    {
        prev: 1,
        title: "Best Price",
        data: "NEW PRODUCT",
        next: 1,
        URL: "../img/Coklat.jpg"
    },
    {
        prev: 1,
        title: "Best Offer",
        data: "NEW SEASON",
        next: 1,
        URL: "../img/Purple.jpg"
    }
];

const libraryShoes = [
    {
        title: "Converse",
        URL: "../img/Converse.jpg"

    },
    {
        title: "Nike",
        URL: "../img/Nike.jpg"
    },
    {
        title: "Vans",
        URL: "../img/Vans.jpg"
    }
];

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const slideItem = document.getElementById('slide-item');
const dataShoes = document.getElementById('dataShoes');

let currentIndex = 0; // Menyimpan indeks slide saat ini
let autoSlideInterval; // Variabel untuk menyimpan interval slide otomatis

function showItem(index) {
    const title = document.createElement('p');
    const data = document.createElement('p');

    title.classList.add('slideshow');
    data.classList.add('slideshow');

    title.id = "title";
    data.id = "data";
    libraryShoes.id = "libraryShoes";

    title.innerText = textSlideshow[index].title;
    data.innerText = textSlideshow[index].data;
    slideItem.style.backgroundImage = `url('${textSlideshow [index].URL}')` 
    slideItem.append(title, data);
}

function nextSlide() {
    const title = document.getElementById('title');
    const data = document.getElementById('data');
    slideItem.removeChild(title);
    slideItem.removeChild(data);

    currentIndex = (currentIndex + 1) % textSlideshow.length; // Pindah ke indeks slide berikutnya

    showItem(currentIndex);
}

function shoesLibrary({title, URL}) {
    const libraryItem = document.createElement('div');
    const titleItem = document.createElement('h1');
    const bodyItem = document.createElement('img');

    libraryItem.classList.add('container-shoes');

    titleItem.innerText = title;
    bodyItem.src = URL;
    bodyItem.classList.add('Image');
    titleItem.classList.add('titleItem');
    libraryItem.classList.add( 'libraryItem');
    libraryItem.append(titleItem, bodyItem);
    return libraryItem;
}

libraryShoes.forEach((data) => {
    const item = shoesLibrary(data);
    dataShoes.append(item);
})

document.addEventListener('DOMContentLoaded', () => {
    showItem(currentIndex);

    // Mulai slide otomatis setiap 3 detik
    autoSlideInterval = setInterval(nextSlide, 3000);
});

btnPrev.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Hentikan slide otomatis saat tombol prev diklik
    const title = document.getElementById('title');
    const data = document.getElementById('data');
    slideItem.removeChild(title);
    slideItem.removeChild(data);
    currentIndex = (currentIndex - 1 + textSlideshow.length) % textSlideshow.length; // Pindah ke indeks slide sebelumnya
    showItem(currentIndex);
    autoSlideInterval = setInterval(nextSlide, 3000); // Mulai slide otomatis kembali
});

btnNext.addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Hentikan slide otomatis saat tombol next diklik
    const title = document.getElementById('title');
    const data = document.getElementById('data');
    slideItem.removeChild(title);
    slideItem.removeChild(data);
    currentIndex = (currentIndex + 1) % textSlideshow.length; // Pindah ke indeks slide berikutnya
    showItem(currentIndex);
    autoSlideInterval = setInterval(nextSlide, 3000); // Mulai slide otomatis kembali
});

const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
