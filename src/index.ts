import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

document.addEventListener('DOMContentLoaded', () => {
    const email: string = 's.kadirov@innopolis.university';
    const comicContainer = document.getElementById('comic-container') as HTMLDivElement;
    const comicImg = document.getElementById('comic-img') as HTMLImageElement;
    const comicTitle = document.getElementById('comic-title') as HTMLHeadingElement;
    const comicDate = document.getElementById('comic-date') as HTMLParagraphElement;
    const loadComicButton = document.getElementById('load-comic') as HTMLButtonElement;

    interface Comic {
        img: string;
        alt: string;
        safe_title: string;
        year: string;
        month: string;
        day: string;
    }

    function loadComic(): void {
        fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json() as Promise<number>;
            })
            .then(comicId => {
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
                return response.json() as Promise<Comic>;
            })
            .then(comic => {
                comicImg.src = comic.img;
                comicImg.alt = comic.alt;
                comicTitle.textContent = comic.safe_title;

                const releaseDate = dayjs(new Date(
                    parseInt(comic.year),
                    parseInt(comic.month) - 1,
                    parseInt(comic.day)
                ));
                comicDate.textContent = `Released: ${releaseDate.fromNow()}`;

                comicImg.style.display = 'block';
                comicTitle.style.display = 'block';
                comicDate.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching comic:', error);
                comicContainer.innerHTML = '<p>Failed to load comic. Please try again later.</p>';
            });
    }

    if (loadComicButton) {
        loadComicButton.addEventListener('click', loadComic);
    }
});
