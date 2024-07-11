import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Header from '../components/Header';
import Footer from '../components/Footer';

dayjs.extend(relativeTime);

interface Comic {
    img: string;
    alt: string;
    safe_title: string;
    year: string;
    month: string;
    day: string;
}

const ComicPage: React.FC<{ comic: Comic }> = ({ comic }) => (
    <div>
        <Header title="XKCD Comic" buttonText="Back to Portfolio" buttonLink="/" />
        <main>
            <section id="comic">
                <h2>Random XKCD Comic</h2>
                <div id="comic-container" className="comic-container">
                    <img id="comic-img" src={comic.img} alt={comic.alt} />
                    <h3 id="comic-title">{comic.safe_title}</h3>
                    <p id="comic-date">Released: {dayjs(new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day))).fromNow()}</p>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);

export async function getServerSideProps() {
    const email = 's.kadirov@innopolis.university';
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`);
    const comicId = await response.json();
    const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
    const comic = await comicResponse.json();

    return { props: { comic } };
}

export default ComicPage;
