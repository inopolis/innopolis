import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<{ title: string; buttonText?: string; buttonLink?: string }> = ({ title, buttonText, buttonLink }) => {
    const navigate = useNavigate();

    return (
        <header>
            <nav className="nav-container">
                <h1>{title}</h1>
                {buttonText && buttonLink && (
                    <button onClick={() => navigate(buttonLink)} className="nav-button">{buttonText}</button>
                )}
            </nav>
        </header>
    );
};

export default Header;
