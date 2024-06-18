document.addEventListener('DOMContentLoaded', function () {
    const email = 's.kadirov@innopolis.university';
    const comicContainer = document.getElementById('comic-container');
    const comicImg = document.getElementById('comic-img');
    const comicTitle = document.getElementById('comic-title');
    const comicDate = document.getElementById('comic-date');

    // Fetch the XKCD comic ID
    fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Comic ID response:', data);
            const comicId = data;
            if (comicId) {
                return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
            } else {
                throw new Error('Invalid comic ID');
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(comic => {
            console.log('Comic data response:', comic);
            comicImg.src = comic.img;
            comicImg.alt = comic.alt;
            comicTitle.textContent = comic.safe_title;
            comicDate.textContent = comic.year;
        })
        .catch(error => {
            console.error('Error fetching comic:', error);
            comicContainer.innerHTML = '<p>Failed to load comic. Please try again later.</p>';
        });
});
