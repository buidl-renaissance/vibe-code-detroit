import Head from "next/head";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import EmailCapture from "../components/EmailCapture";
import { useEffect, useState } from "react";

interface MeetupEvent {
  id: number;
  eventId: string;
  title: string;
  description: string;
  dateTime: string;
  venue: {
    address: string;
    city: string;
    name: string;
    state: string;
  } | null;
  eventUrl: string;
  group: {
    name: string;
  };
}

const neonTurnOn = keyframes`
  0% {
    opacity: 0;
    filter: brightness(0) drop-shadow(0 0 0px rgba(255, 97, 166, 0));
  }
  50% {
    opacity: 0.5;
    filter: brightness(0.5) drop-shadow(0 0 5px rgba(255, 97, 166, 0.3));
  }
  100% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(255, 97, 166, 0.8)) drop-shadow(0 0 20px rgba(255, 97, 166, 0.6)) drop-shadow(0 0 30px rgba(255, 97, 166, 0.4));
  }
`;

const neonFlicker = keyframes`
  0% {
    opacity: 0;
    filter: brightness(0) drop-shadow(0 0 0px rgba(64, 244, 255, 0));
  }
  10% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(64, 244, 255, 0.8)) drop-shadow(0 0 20px rgba(64, 244, 255, 0.6)) drop-shadow(0 0 30px rgba(64, 244, 255, 0.4));
  }
  20% {
    opacity: 0;
    filter: brightness(0) drop-shadow(0 0 0px rgba(64, 244, 255, 0));
  }
  30% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(64, 244, 255, 0.8)) drop-shadow(0 0 20px rgba(64, 244, 255, 0.6)) drop-shadow(0 0 30px rgba(64, 244, 255, 0.4));
  }
  40% {
    opacity: 0;
    filter: brightness(0) drop-shadow(0 0 0px rgba(64, 244, 255, 0));
  }
  50% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(64, 244, 255, 0.8)) drop-shadow(0 0 20px rgba(64, 244, 255, 0.6)) drop-shadow(0 0 30px rgba(64, 244, 255, 0.4));
  }
  100% {
    opacity: 1;
    filter: brightness(1) drop-shadow(0 0 10px rgba(64, 244, 255, 0.8)) drop-shadow(0 0 20px rgba(64, 244, 255, 0.6)) drop-shadow(0 0 30px rgba(64, 244, 255, 0.4));
  }
`;

const scrollBounce = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Styled Components
const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      135deg,
      rgba(46, 26, 71, 0.6) 0%,
      rgba(27, 20, 100, 0.6) 50%,
      rgba(46, 26, 71, 0.6) 100%
    ),
    url("/images/vibe-code-background.png");
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(255, 97, 166, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(64, 244, 255, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(255, 145, 77, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
  }
`;

const Main = styled.main`
  max-width: 900px;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
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
  position: relative;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    height: 250px;
  }
`;

const VibeImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    animation: ${neonTurnOn} 0.3s ease-in-out 0.5s forwards;
    filter: brightness(0) drop-shadow(0 0 0px rgba(255, 97, 166, 0));
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      filter: brightness(1) drop-shadow(0 0 5px rgba(255, 97, 166, 0.8))
        drop-shadow(0 0 10px rgba(255, 97, 166, 0.6))
        drop-shadow(0 0 15px rgba(255, 97, 166, 0.4));
    }
  }
`;

const CodeDetroitImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 0;
    animation: ${neonFlicker} 3s ease-in-out 1.5s forwards;
    filter: brightness(0) drop-shadow(0 0 0px rgba(64, 244, 255, 0));
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      filter: brightness(1) drop-shadow(0 0 5px rgba(64, 244, 255, 0.8))
        drop-shadow(0 0 10px rgba(64, 244, 255, 0.6))
        drop-shadow(0 0 15px rgba(64, 244, 255, 0.4));
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 3s forwards;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    transform: translateX(-50%) scale(1.1);

    &::after {
      animation: ${scrollBounce} 1s ease-in-out infinite;
      text-shadow: 0 0 20px rgba(64, 244, 255, 1),
        0 0 30px rgba(64, 244, 255, 0.8), 0 0 40px rgba(64, 244, 255, 0.6),
        0 0 50px rgba(64, 244, 255, 0.4);
      filter: drop-shadow(0 0 12px rgba(64, 244, 255, 1));
    }
  }

  &::after {
    content: "⌄";
    color: #40f4ff;
    font-size: 4rem;
    font-weight: bold;
    animation: ${scrollBounce} 1.5s ease-in-out infinite;
    text-shadow: 0 0 15px rgba(64, 244, 255, 0.8),
      0 0 25px rgba(64, 244, 255, 0.6), 0 0 35px rgba(64, 244, 255, 0.4),
      0 0 45px rgba(64, 244, 255, 0.2);
    filter: drop-shadow(0 0 8px rgba(64, 244, 255, 0.8));
    transition: all 0.3s ease;
  }
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #40f4ff;
  margin: 0;
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Tagline = styled.div`
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }
`;

const TaglineText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #ff61a6;
  font-style: italic;
  text-shadow: 0 0 20px rgba(255, 97, 166, 0.4);

  @media (max-width: 768px) {
    font-size: 1.1rem;
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
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 25px;

  &:hover {
    color: #40f4ff;
    background: rgba(64, 244, 255, 0.1);
    box-shadow: 0 0 8px rgba(64, 244, 255, 0.3);
  }
`;

const EventCard = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: rgba(27, 20, 100, 0.4);
  border: 2px solid #40f4ff;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(64, 244, 255, 0.3),
    inset 0 0 20px rgba(64, 244, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 1.5rem;
    border-radius: 15px;
  }

  &:hover {
    box-shadow: 0 0 30px rgba(64, 244, 255, 0.5),
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
  color: #ff61a6;
  margin: 0 0 1rem 0;
  font-family: "Poppins", sans-serif;
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
  color: #40f4ff;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const EventLocation = styled.div`
  font-size: 1.1rem;
  color: #ff914d;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;

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
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0 0 1.2rem 0;
  }
`;

const EventsSection = styled.section`
  margin: 3rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #40f4ff;
  margin: 0 0 2rem 0;
  font-family: "Orbitron", sans-serif;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(64, 244, 255, 0.5),
    0 0 20px rgba(64, 244, 255, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin: 0 0 1.5rem 0;
  }
`;

const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #40f4ff;
  text-align: center;
  font-family: "Poppins", sans-serif;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const NoEventsText = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-family: "Poppins", sans-serif;
  padding: 2rem;
  background: rgba(27, 20, 100, 0.3);
  border-radius: 15px;
  border: 1px solid rgba(64, 244, 255, 0.2);
`;

const EventButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: rgba(64, 244, 255, 0.2);
  color: #40f4ff;
  text-decoration: none;
  border-radius: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  border: 2px solid #40f4ff;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    background-color: rgba(64, 244, 255, 0.4);
    box-shadow: 0 0 15px rgba(64, 244, 255, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const GroupName = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

// Filter function for vibe coding events
const isVibeCodingEvent = (event: MeetupEvent): boolean => {
  const titleLower = event.title.toLowerCase();
  const descLower = event.description.toLowerCase();
  const groupLower = event.group?.name?.toLowerCase() || "";
  
  // Primary terms - events should match these closely
  const primaryTerms = ["vibe code", "vibe coding", "vibecode"];
  
  // Secondary terms - coding/programming specific
  const codingTerms = ["coding", "programming", "developer", "software development", "hackathon", "code along", "web development", "app development"];
  
  // Tech groups that are likely relevant
  const techGroupTerms = ["code", "developer", "programming", "tech", "software", "hacker"];
  
  // Check if it's explicitly a vibe coding event
  const isPrimaryMatch = primaryTerms.some(term => 
    titleLower.includes(term) || descLower.includes(term) || groupLower.includes(term)
  );
  
  // Check if it's a coding-related event from a tech group
  const isCodingEvent = codingTerms.some(term => 
    titleLower.includes(term) || descLower.includes(term)
  );
  
  const isFromTechGroup = techGroupTerms.some(term => groupLower.includes(term));
  
  return isPrimaryMatch || isCodingEvent || isFromTechGroup;
};

// Format date for display
const formatEventDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short'
  });
};

export default function Home() {
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/meetup-events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        const filteredEvents = data.events.filter(isVibeCodingEvent);
        setEvents(filteredEvents);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleScrollClick = () => {
    const arrow = document.querySelector("[data-scroll-indicator]");
    if (arrow) {
      const arrowRect = arrow.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetScroll = scrollTop + arrowRect.bottom + 20; // 20px buffer above the arrow

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Vibe Code Detroit - Community of Tech Enthusiasts</title>
        <meta
          name="description"
          content="Vibe Code Detroit is a community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vibecodedetroit.com/" />
        <meta
          property="og:title"
          content="Vibe Code Detroit - Community of Tech Enthusiasts"
        />
        <meta
          property="og:description"
          content="Vibe Code Detroit is a community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding."
        />
        <meta
          property="og:image"
          content="/images/vibe-code-detroit-featured.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vibecodedetroit.com/" />
        <meta
          property="twitter:title"
          content="Vibe Code Detroit - Community of Tech Enthusiasts"
        />
        <meta
          property="twitter:description"
          content="Vibe Code Detroit is a community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding."
        />
        <meta
          property="twitter:image"
          content="/images/vibe-code-detroit-featured.png"
        />
      </Head>
      <Page>
        <Main>
          <Hero>
            <TitleImage>
              <VibeImage>
                <Image
                  src="/images/vibe.png"
                  alt="Vibe"
                  width={600}
                  height={200}
                  priority
                />
              </VibeImage>
              <CodeDetroitImage>
                <Image
                  src="/images/code-detroit.png"
                  alt="Code Detroit"
                  width={600}
                  height={200}
                  priority
                />
              </CodeDetroitImage>
              <ScrollIndicator
                onClick={handleScrollClick}
                data-scroll-indicator
              />
            </TitleImage>
            <Subtitle>
              Vibe Code Detroit is a community of tech enthusiasts and creators
              coming together to build meaningful solutions through Vibe Coding.
              Our goal is simple: leverage technology to foster genuine
              connections, empower local initiatives, and nurture a supportive
              ecosystem rooted deeply in community values.
            </Subtitle>
            <Description>
              Whether you&apos;re a developer, a designer, or simply
              tech-curious, join us as we explore collaborative coding sessions,
              workshops, and projects designed to uplift Detroit through
              innovation and creativity.
            </Description>
            <Tagline>
              <TaglineText>Together, let&apos;s code the vibe.</TaglineText>
            </Tagline>
          </Hero>

          <EventsSection>
            <SectionTitle>Upcoming Events</SectionTitle>
            {loading ? (
              <LoadingText>Loading events...</LoadingText>
            ) : error || events.length === 0 ? (
              <NoEventsText>No upcoming events — stay tuned!</NoEventsText>
            ) : (
              <EventsList>
                {events.map((event) => (
                  <EventCard key={event.eventId}>
                    <GroupName>{event.group?.name}</GroupName>
                    <EventTitle>{event.title}</EventTitle>
                    <EventDate>{formatEventDate(event.dateTime)}</EventDate>
                    {event.venue && (
                      <EventLocation>
                        📍 {event.venue.name}, {event.venue.city}, {event.venue.state}
                      </EventLocation>
                    )}
                    <EventDescription>
                      {event.description.length > 300 
                        ? `${event.description.substring(0, 300)}...` 
                        : event.description}
                    </EventDescription>
                    <div style={{ textAlign: 'center' }}>
                      <EventButton 
                        href={event.eventUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Event →
                      </EventButton>
                    </div>
                  </EventCard>
                ))}
              </EventsList>
            )}
          </EventsSection>

          <EmailCapture
            title="Stay in the Vibe"
            subtitle="Get notified about upcoming meetups, workshops, and community events."
            placeholder="Enter your email to stay connected"
            buttonText="Join the Vibe"
          />

          {/* <CTAs>
            <PrimaryButton href="#join" target="_blank" rel="noopener noreferrer">
              Join Our Community
            </PrimaryButton>
            <SecondaryButton href="#learn" target="_blank" rel="noopener noreferrer">
              Learn More
            </SecondaryButton>
          </CTAs> */}
        </Main>
        <Footer>
          <FooterLink href="/roadmap">🗺️ Development Roadmap</FooterLink>
        </Footer>
      </Page>
    </>
  );
}
