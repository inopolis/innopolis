import React from 'react';

const basePath = process.env.NODE_ENV === 'production' ? '/innopolis' : '';

const SocialLinks: React.FC = () => (
    <div className="social-links">
        <a id="gh-link" href="https://github.com/inopolis" target="_blank" rel="noopener noreferrer">
            <img src={`${basePath}/images/github-mark.png`} alt="GitHub" />
        </a>
        <a id="tg-link" href="https://t.me/Saidaziz_K" target="_blank" rel="noopener noreferrer">
            <img src={`${basePath}/images/telegram-icon.png`} alt="Telegram" />
        </a>
        <a id="email" href="mailto:s.kadirov@innopolis.university">
            <img src={`${basePath}/images/email-icon.png`} alt="Email" />
        </a>
    </div>
);


export default SocialLinks;
