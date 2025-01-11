import React from 'react';

export const Hero = ({ children }) => (
  <div style={heroStyle}>
    {children}
  </div>
);

export const Button = ({ children, onClick }) => (
  <button style={buttonStyle} onClick={onClick}>
    {children}
  </button>
);

const BackgroundPattern = () => (
  <div style={backgroundPatternStyle} />
);

const BackgroundImage = () => (
  <div style={backgroundImageStyle}>
    <img
      src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=2400&q=80"
      alt="Cooking background"
      style={backgroundImgStyle}
    />
  </div>
);

const HeroContent = ({ children }) => (
  <div style={heroContentStyle}>
    <div style={textCenterStyle}>{children}</div>
  </div>
);

// Updated to have a beige background
const heroStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Full viewport height
  backgroundColor: '#f5f5dc', // Beige background
  padding: '20px',
  textAlign: 'center',
  position: 'relative',
};

const buttonStyle = {
  backgroundColor: '#ff5722', // Orange background
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
};

const backgroundPatternStyle = {
  position: 'absolute',
  inset: '0',
  background: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjQ0LCA2MywgOTQsIDAuMSkiLz48L2c+PC9zdmc+')]",
  opacity: '0.4',
};

const backgroundImageStyle = {
  position: 'absolute',
  inset: '0',
  zIndex: '-10',
};

const backgroundImgStyle = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  opacity: '0.1',
};

const heroContentStyle = {
  position: 'relative',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '20px 16px 28px',
  textAlign: 'center',
};

const textCenterStyle = {
  textAlign: 'center',
};

export { BackgroundPattern, BackgroundImage, HeroContent };
