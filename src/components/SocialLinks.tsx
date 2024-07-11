/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';

const SocialLinks: React.FC = () => (
  <div className="social-links">
    <a
      id="gh-link"
      href="https://github.com/inopolis"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/images/github-mark.png"
        alt="GitHub"
        width={32}
        height={32}
      />
    </a>
    <a
      id="tg-link"
      href="https://t.me/Saidaziz_K"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/images/telegram-icon.png"
        alt="Telegram"
        width={32}
        height={32}
      />
    </a>
    <a id="email" href="mailto:s.kadirov@innopolis.university">
      <Image
        src="/images/email-icon.png"
        alt="Email"
        width={32}
        height={32}
      />
    </a>
  </div>
);

export default SocialLinks;
