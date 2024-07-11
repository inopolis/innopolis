import React from 'react';
import { useRouter } from 'next/router';

const Header: React.FC<{
  title: string;
  buttonText?: string;
  buttonLink?: string;
}> = ({ title, buttonText, buttonLink }) => {
  const router = useRouter();

  return (
    <header>
      <nav className="nav-container">
        <h1>{title}</h1>
        {buttonText && buttonLink && (
          <button
            onClick={() => router.push(buttonLink)}
            className="nav-button"
          >
            {buttonText}
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
