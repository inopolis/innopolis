document.addEventListener('DOMContentLoaded', function () {
    const email = 's.kadirov@innopolis.university';
    const comicContainer = document.getElementById('comic-container');
    const comicImg = document.getElementById('comic-img');
    const comicTitle = document.getElementById('comic-title');
    const comicDate = document.getElementById('comic-date');

    // Fetch the XKCD comic ID
    fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`)
        .then(response => response.json())
        .then(data => {
            const comicId = data.id;
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then(response => response.json())
        .then(comic => {
            comicImg.src = comic.img;
            comicImg.alt = comic.alt;
            comicTitle.textContent = comic.title;
            const date = new Date(comic.date);
            comicDate.textContent = date.toLocaleDateString();
        })
        .catch(error => {
            console.error('Error fetching comic:', error);
        });
});
