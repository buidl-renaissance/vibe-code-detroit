import Head from "next/head";
import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import QRCode from "qrcode";

// Neon glow animation
const neonGlow = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 2px #FF61A6,
      0 0 4px #FF61A6,
      0 0 6px #FF61A6;
  }
  50% {
    text-shadow: 
      0 0 4px #FF61A6,
      0 0 8px #FF61A6,
      0 0 12px #FF61A6;
  }
`;

const cyanGlow = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 2px #40F4FF,
      0 0 4px #40F4FF,
      0 0 6px #40F4FF;
  }
  50% {
    text-shadow: 
      0 0 4px #40F4FF,
      0 0 8px #40F4FF,
      0 0 12px #40F4FF;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 
      0 0 20px rgba(64, 244, 255, 0.4),
      0 0 40px rgba(64, 244, 255, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 
      0 0 30px rgba(64, 244, 255, 0.6),
      0 0 60px rgba(64, 244, 255, 0.3);
  }
`;

// Styled Components
const Page = styled.div`
  min-height: 100vh;
  background: 
    linear-gradient(135deg, rgba(46, 26, 71, 0.6) 0%, rgba(27, 20, 100, 0.6) 50%, rgba(46, 26, 71, 0.6) 100%),
    url('/images/vibe-code-background.png');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 97, 166, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(64, 244, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255, 145, 77, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Main = styled.main`
  max-width: 600px;
  text-align: center;
  z-index: 1;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #FF61A6;
  margin: 0 0 1rem 0;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: ${neonGlow} 2s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #40F4FF;
  margin: 0 0 2rem 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 0 1.5rem 0;
  }
`;

const QRContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: rgba(27, 20, 100, 0.4);
  border: 2px solid #40F4FF;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 20px rgba(64, 244, 255, 0.3),
    inset 0 0 20px rgba(64, 244, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${pulse} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 1.5rem;
    border-radius: 15px;
  }
`;

const QRCodeCanvas = styled.canvas`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #FF61A6, #FF914D);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(255, 97, 166, 0.4);
  
  &:hover {
    box-shadow: 0 0 25px rgba(255, 97, 166, 0.6);
    transform: translateY(-2px);
  }
`;

const BackButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: #40F4FF;
  border: 2px solid #40F4FF;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(64, 244, 255, 0.3);
  
  &:hover {
    background: rgba(64, 244, 255, 0.1);
    box-shadow: 0 0 15px rgba(64, 244, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 1.5rem 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 1rem 0;
  }
`;

export default function QRPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const githubUrl = "https://github.com/buidl-renaissance/vibe-code-detroit";

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, githubUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      }, (error) => {
        if (error) {
          console.error('Error generating QR code:', error);
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>QR Code - Vibe Code Detroit GitHub</title>
        <meta name="description" content="Scan this QR code to visit the Vibe Code Detroit GitHub repository" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Page>
        <Main>
          <Title>QR Code</Title>
          <Subtitle>Scan to visit our GitHub repository</Subtitle>
          
          <QRContainer>
            <QRCodeCanvas ref={canvasRef} />
            <Description>
              Point your camera at this QR code to quickly access our GitHub repository and explore the Vibe Code Detroit project.
            </Description>
            <GitHubLink href={githubUrl} target="_blank" rel="noopener noreferrer">
              🌟 Visit GitHub Repository
            </GitHubLink>
          </QRContainer>
          
          <BackButton href="/">
            ← Back to Home
          </BackButton>
        </Main>
      </Page>
    </>
  );
}
