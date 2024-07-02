import React from 'react';

const SocialLinks: React.FC = () => (
    <div className="social-links">
        <a id="gh-link" href="https://github.com/inopolis" target="_blank" rel="noopener noreferrer">
            <img src="/images/github-mark.png" alt="GitHub" />
        </a>
        <a id="tg-link" href="https://t.me/Saidaziz_K" target="_blank" rel="noopener noreferrer">
            <img src="/images/telegram-icon.png" alt="Telegram" />
        </a>
        <a id="email" href="mailto:s.kadirov@innopolis.university">
            <img src="/images/email-icon.png" alt="Email" />
        </a>
    </div>
);

export default SocialLinks;
