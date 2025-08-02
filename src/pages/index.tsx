import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

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

const flicker = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
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
  max-width: 900px;
  text-align: center;
  z-index: 1;
  animation: ${float} 6s ease-in-out infinite;
  
  @media (max-width: 768px) {
    max-width: 100%;
    animation: none;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const TitleImage = styled.div`
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  img {
    max-width: 100%;
    height: auto;
    filter: 
      drop-shadow(0 0 10px rgba(255, 97, 166, 0.8))
      drop-shadow(0 0 20px rgba(255, 97, 166, 0.6))
      drop-shadow(0 0 30px rgba(255, 97, 166, 0.4))
      drop-shadow(0 0 40px rgba(255, 97, 166, 0.2));
    transition: all 0.3s ease;
    animation: ${neonGlow} 2s ease-in-out infinite;
    
    @media (max-width: 768px) {
      filter: 
        drop-shadow(0 0 5px rgba(255, 97, 166, 0.8))
        drop-shadow(0 0 10px rgba(255, 97, 166, 0.6))
        drop-shadow(0 0 15px rgba(255, 97, 166, 0.4));
      animation: none;
    }
    
    &:hover {
      filter: 
        drop-shadow(0 0 15px rgba(255, 97, 166, 1))
        drop-shadow(0 0 30px rgba(255, 97, 166, 0.8))
        drop-shadow(0 0 45px rgba(255, 97, 166, 0.6))
        drop-shadow(0 0 60px rgba(255, 97, 166, 0.4));
      transform: scale(1.02);
      
      @media (max-width: 768px) {
        transform: none;
        filter: 
          drop-shadow(0 0 8px rgba(255, 97, 166, 1))
          drop-shadow(0 0 15px rgba(255, 97, 166, 0.8))
          drop-shadow(0 0 20px rgba(255, 97, 166, 0.6));
      }
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #40F4FF;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Tagline = styled.div`
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 97, 166, 0.1);
  border: 2px solid #FF61A6;
  border-radius: 20px;
  box-shadow: 
    0 0 10px rgba(255, 97, 166, 0.3),
    inset 0 0 10px rgba(255, 97, 166, 0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 1rem 1.5rem;
    border-radius: 15px;
  }
  
  &:hover {
    box-shadow: 
      0 0 15px rgba(255, 97, 166, 0.5),
      inset 0 0 15px rgba(255, 97, 166, 0.2);
    transform: scale(1.02);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const TaglineText = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #FF61A6;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

const CTAs = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Button = styled.a`
  appearance: none;
  border-radius: 50px;
  height: 56px;
  padding: 0 2rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #FF914D, #FF61A6);
  color: white;
  box-shadow: 
    0 0 10px rgba(255, 145, 77, 0.4),
    0 4px 15px rgba(255, 145, 77, 0.2);
  
  &:hover {
    box-shadow: 
      0 0 15px rgba(255, 145, 77, 0.6),
      0 6px 20px rgba(255, 145, 77, 0.3);
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: #40F4FF;
  border-color: #40F4FF;
  box-shadow: 
    0 0 10px rgba(64, 244, 255, 0.3),
    0 4px 15px rgba(64, 244, 255, 0.1);
  
  &:hover {
    background: rgba(64, 244, 255, 0.1);
    box-shadow: 
      0 0 15px rgba(64, 244, 255, 0.5),
      0 6px 20px rgba(64, 244, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  background: rgba(27, 20, 100, 0.3);
  padding: 1.5rem;
  border-radius: 20px;
  border: 1px solid rgba(64, 244, 255, 0.2);
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  
  &:hover {
    color: #40F4FF;
    background: rgba(64, 244, 255, 0.1);
    box-shadow: 0 0 8px rgba(64, 244, 255, 0.3);
  }
`;

const EventCard = styled.div`
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
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 1.5rem;
    border-radius: 15px;
  }
  
  &:hover {
    box-shadow: 
      0 0 30px rgba(64, 244, 255, 0.5),
      inset 0 0 30px rgba(64, 244, 255, 0.2);
    transform: scale(1.02);
    
    @media (max-width: 768px) {
      transform: none;
    }
  }
`;

const EventTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #FF61A6;
  margin: 0 0 1rem 0;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 1px;
    margin: 0 0 0.8rem 0;
  }
`;

const EventDate = styled.div`
  font-size: 1.3rem;
  color: #40F4FF;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const EventLocation = styled.div`
  font-size: 1.1rem;
  color: #FF914D;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
`;

const EventDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1.5rem 0;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0 0 1.2rem 0;
  }
`;

const EventSpeaker = styled.div`
  font-size: 1.1rem;
  color: #40F4FF;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const EventTopics = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  
  li {
    color: rgba(255, 255, 255, 0.8);
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    font-family: 'Poppins', sans-serif;
    
    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #FF61A6;
      font-weight: bold;
    }
  }
`;

const EventSponsors = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 1.5rem;
  font-family: 'Poppins', sans-serif;
`;

const EventLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Vibe Code Detroit - Community of Tech Enthusiasts</title>
        <meta name="description" content="Vibe Code Detroit is a community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vibecodedetroit.com/" />
        <meta property="og:title" content="Vibe Code Detroit - Community of Tech Enthusiasts" />
        <meta property="og:description" content="Vibe Code Detroit is a community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding." />
        <meta property="og:image" content="/images/vibe-code-detroit-featured.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vibecodedetroit.com/" />
        <meta property="twitter:title" content="Vibe Code Detroit - Community of Tech Enthusiasts" />
        <meta property="twitter:description" content="Vibe Code Detroit is a community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding." />
        <meta property="twitter:image" content="/images/vibe-code-detroit-featured.png" />
      </Head>
      <Page>
        <Main>
          <Hero>
            <TitleImage>
              <Image
                src="/images/vibe-code-detroit.png"
                alt="Vibe Code Detroit"
                width={600}
                height={200}
                priority
              />
            </TitleImage>
            <Subtitle>
              Vibe Code Detroit is a community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding. Our goal is simple: leverage technology to foster genuine connections, empower local initiatives, and nurture a supportive ecosystem rooted deeply in community values.
            </Subtitle>
            <Description>
              Whether you&apos;re a developer, a designer, or simply tech-curious, join us as we explore collaborative coding sessions, workshops, and projects designed to uplift Detroit through innovation and creativity.
            </Description>
            <Tagline>
              <TaglineText>Together, let&apos;s code the vibe.</TaglineText>
            </Tagline>
          </Hero>

          <EventCard>
            <EventTitle>Next Vibe Coding Meetup</EventTitle>
            <EventDate>August 11th</EventDate>
            <EventLocation>📍 Bamboo Royal Oak</EventLocation>
            
            <EventDescription>
              Join us for our Vibe Coding meetup! Bring your projects or learn from others. Perfect for both beginners and experienced vibe coders.
            </EventDescription>
            
            {/* <EventSpeaker>
              🎤 David &quot;Stock&quot; Baird
            </EventSpeaker> */}
            
            {/* <EventTopics>
              <li>Origins of Vibe Coding</li>
              <li>Latest Updates & Best Practices</li>
              <li>MySALT AI & Vibe Coded Projects</li>
              <li>Q&A & Networking</li>
            </EventTopics> */}
            
            {/* <EventSponsors>
              Hosted by Bamboo Royal Oak • Sponsored by Baird Tech & MySALT AI
            </EventSponsors> */}
            
            {/* <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <EventLink href="https://mysalt.ai/vibe-coding" target="_blank" rel="noopener noreferrer">
                Join Our Free Vibe Coding Hub
              </EventLink>
            </div> */}
          </EventCard>

          {/* <CTAs>
            <PrimaryButton href="#join" target="_blank" rel="noopener noreferrer">
              Join Our Community
            </PrimaryButton>
            <SecondaryButton href="#learn" target="_blank" rel="noopener noreferrer">
              Learn More
            </SecondaryButton>
          </CTAs> */}
        </Main>
        {/* <Footer>
          <FooterLink href="#workshops" target="_blank" rel="noopener noreferrer">
            🎯 Workshops
          </FooterLink>
          <FooterLink href="#projects" target="_blank" rel="noopener noreferrer">
            🚀 Projects
          </FooterLink>
          <FooterLink href="#contact" target="_blank" rel="noopener noreferrer">
            💬 Contact Us →
          </FooterLink>
        </Footer> */}
      </Page>
    </>
  );
}
