import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Header title="Welcome to My Portfolio" buttonText="View Comic" buttonLink="/comic" />
            <main>
                <section id="bio">
                    <h2>About Me</h2>
                    <p>Hello! I'm Saidaziz. I love designing, creating and exploring new technologies. Here is a little more
                        about my journey and interests.</p>
                    <p>I primarily use Python, C++, and JavaScript for programming, along with HTML and CSS for web development.</p>
                </section>

                <section id="projects">
                    <h2>My activity in dev</h2>
                    <ul>
                        <li><a href="https://innohassle.ru" target="_blank" rel="noopener noreferrer">innohassle.ru</a> - innohassle website</li>
                        <li><a href="https://sport.innopolis.university" target="_blank" rel="noopener noreferrer">new my.uni sport</a> - New my.university website</li>
                        <li>For additional information you can contact me!</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
}
