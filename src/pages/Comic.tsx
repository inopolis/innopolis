import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GetServerSideProps } from 'next';

dayjs.extend(relativeTime);

interface Comic {
    img: string;
    alt: string;
    safe_title: string;
    year: string;
    month: string;
    day: string;
}

interface ComicProps {
    comic: Comic | null;
    error: string | null;
}

const ComicPage: React.FC<ComicProps> = ({ comic, error }) => {
    return (
        <div>
            <Header title="XKCD Comic" buttonText="Back to Portfolio" buttonLink="/" />
            <main>
                <section id="comic">
                    <h2>Random XKCD Comic</h2>
                    <div id="comic-container" className="comic-container">
                        {comic ? (
                            <>
                                <img id="comic-img" src={comic.img} alt={comic.alt} />
                                <h3 id="comic-title">{comic.safe_title}</h3>
                                <p id="comic-date">Released: {dayjs(new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day))).fromNow()}</p>
                            </>
                        ) : (
                            <p>No comic data available.</p>
                        )}
                        {error && <p>{error}</p>}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const email = 's.kadirov@innopolis.university';
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const comicId = await response.json() as number;
        const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        if (!comicResponse.ok) {
            throw new Error('Network response was not ok.');
        }
        const comic = await comicResponse.json() as Comic;
        return { props: { comic, error: null } };
    } catch (err) {
        console.error('Error fetching comic:', err);
        return { props: { comic: null, error: 'Failed to load comic. Please try again later.' } };
    }
};

export default ComicPage;
