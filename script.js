
const words = document.querySelectorAll('.word');
let wordIndex = 0;

changeWord();

function changeWord() {
    words.forEach((word, index) => {
        if (index === wordIndex) {
            word.classList.add('active');
        } else {
            word.classList.remove('active');
        }
    });

    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(changeWord, 2000); // Change word every 2 seconds
}

const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navlist.classList.toggle('show');
});

// Script untuk mengirimkan data kontak ke spreadsheet (gunakan Google Apps Script)

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ganti URL Google Apps Script dengan URL script Anda
    var scriptURL = 'https://docs.google.com/spreadsheets/d/1ezro_TrNEoE7kdqNIGeCEE-lmSbZKHzW1JqCHm8v6T4/edit?usp=sharing';
    var form = event.target;

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => alert('Message sent successfully!'))
    .catch(error => alert('Error sending message. Please try again later.'));
});
