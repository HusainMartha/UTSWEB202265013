var menuItems = document.querySelector('.menu-items');

function toggleMenu() {
    if (menuItems.classList.contains('show')) {
        menuItems.classList.remove('show');
    } else {
        menuItems.classList.add('show');
    }
}

var judulFilm = [];
var sinopsisFilm = [];

for (var i = 1; i <= 5; i++) {
    judulFilm[i] = document.getElementById('judulFilm' + i);
    sinopsisFilm[i] = document.getElementById('sinopsisFilm' + i);

    judulFilm[i].addEventListener('dblclick', createToggleHandler(i));
    judulFilm[i].addEventListener('click', createHideHandler(i));
    sinopsisFilm[i].addEventListener('click', createHideHandler(i));
}

function createToggleHandler(index) {
    return function() {
        if (sinopsisFilm[index].style.display === 'none' || sinopsisFilm[index].style.display === '') {
            sinopsisFilm[index].style.display = 'block';
            judulFilm[index].style.backgroundColor = 'red'; // Menambahkan warna kuning pada judul film
            sinopsisFilm[index].style.backgroundColor = 'red'; // Menambahkan warna kuning pada sinopsis
        } else {
            sinopsisFilm[index].style.display = 'none';
            judulFilm[index].style.backgroundColor = ''; // Menghapus warna pada judul film
            sinopsisFilm[index].style.backgroundColor = ''; // Menghapus warna pada sinopsis
        }
    };
}

function createHideHandler(index) {
    return function() {
        sinopsisFilm[index].style.display = 'none';
        judulFilm[index].style.backgroundColor = ''; // Menghapus warna pada judul film
        sinopsisFilm[index].style.backgroundColor = ''; // Menghapus warna pada sinopsis
    };
}
