import Head from "next/head";
import Image from "next/image";
import EmailCapture from "../components/EmailCapture";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";

// Background scene components
import {
  SkyOverlay,
  HorizonGlow,
  StarsContainer,
  Star,
  ShootingStarsContainer,
  ShootingStar,
  FirefliesContainer,
  Firefly,
  SunsetSun,
  Moon,
  CloudsContainer,
  Cloud,
  CloudPuff,
  CloudPuffExtra,
  ParticlesContainer,
  Particle,
  OceanContainer,
  WaveLayer,
  Ocean,
  SunReflection,
  SynthwaveGrid,
  ScanlineOverlay,
  MouseGlow,
  OceanShimmerContainer,
  ShimmerSparkle,
  ClickRipple,
} from "../components/background";
import {
  LeftPalmTree,
  RightPalmTree,
  Mountains,
} from "../components/background";

// UI components
import {
  Page,
  Main,
  Hero,
  TitleImage,
  VibeImage,
  CodeDetroitImage,
  ScrollIndicator,
  HeroTextContainer,
  Subtitle,
  Description,
  Tagline,
  TaglineText,
  SectionTitle,
  RevealOnScroll,
  Footer,
  FooterLink,
  StatsSection,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
  WhatIsVibeSection,
  VibeGrid,
  VibeCard,
  VibeIcon,
  VibeCardTitle,
  VibeCardText,
  CountdownSection,
  CountdownTitle,
  CountdownTimer,
  CountdownItem,
  CountdownValue,
  CountdownLabel,
  EventsSection,
  EventsList,
  EventCard,
  EventTitle,
  EventDate,
  EventLocation,
  EventDescription,
  GroupName,
  EventButton,
  LoadingText,
  NoEventsText,
} from "../components/ui";

// Icons
import {
  TargetIcon,
  HandshakeIcon,
  RocketIcon,
  TimerIcon,
  LocationIcon,
  MapIcon,
} from "../components/icons";

// Types and utilities
import {
  MeetupEvent,
  isVibeCodingEvent,
  formatEventDate,
} from "../types/events";

// ============================================
// TYPES
// ============================================

interface MousePosition {
  x: number;
  y: number;
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Home() {
  const [events, setEvents] = useState<MeetupEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [statsVisible, setStatsVisible] = useState(false);
  const [vibeVisible, setVibeVisible] = useState(false);
  const [eventsVisible, setEventsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1000);

  const statsRef = useRef<HTMLDivElement>(null);
  const vibeRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  // Animated counter state
  const [animatedStats, setAnimatedStats] = useState({
    members: 0,
    events: 0,
    projects: 0,
  });
  const targetStats = useRef({ members: 150, events: 24, projects: 12 });

  // Mouse tracking for glow effect (throttled for performance)
  useEffect(() => {
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const updatePosition = () => {
      setMousePosition((prev) => {
        if (prev.x !== lastX || prev.y !== lastY) {
          return { x: lastX, y: lastY };
        }
        return prev;
      });
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Scroll tracking for parallax effects with smooth interpolation
  useEffect(() => {
    let rafId: number;
    let currentScrollY = 0;
    let targetScrollY = 0;
    let ticking = false;
    let isAnimating = false;

    const updateMaxScroll = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      setMaxScroll(Math.max(docHeight - winHeight, 1));
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        startAnimationIfNeeded();
      }
    };

    // Smooth interpolation - only runs while converging
    const smoothUpdate = () => {
      const diff = targetScrollY - currentScrollY;
      const smoothness = 0.18;

      if (Math.abs(diff) > 0.5) {
        currentScrollY += diff * smoothness;
        setScrollY(currentScrollY);
        rafId = requestAnimationFrame(smoothUpdate);
      } else {
        currentScrollY = targetScrollY;
        setScrollY(currentScrollY);
        isAnimating = false;
      }
      ticking = false;
    };

    // Start animation loop when scroll occurs
    const startAnimationIfNeeded = () => {
      if (!isAnimating) {
        isAnimating = true;
        rafId = requestAnimationFrame(smoothUpdate);
      }
    };

    // Initial calculation
    updateMaxScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateMaxScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMaxScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === statsRef.current) setStatsVisible(true);
          if (entry.target === vibeRef.current) setVibeVisible(true);
          if (entry.target === eventsRef.current) setEventsVisible(true);
        }
      });
    }, observerOptions);

    if (statsRef.current) observer.observe(statsRef.current);
    if (vibeRef.current) observer.observe(vibeRef.current);
    if (eventsRef.current) observer.observe(eventsRef.current);

    return () => observer.disconnect();
  }, []);

  // Animate stats numbers when visible
  useEffect(() => {
    if (statsVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;
      const targets = targetStats.current;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          members: Math.round(targets.members * easeProgress),
          events: Math.round(targets.events * easeProgress),
          projects: Math.round(targets.projects * easeProgress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [statsVisible]);

  // Countdown timer
  useEffect(() => {
    const calculateCountdown = () => {
      if (events.length > 0) {
        const nextEvent = events[0];
        const eventDate = new Date(nextEvent.dateTime);
        const now = new Date();
        const diff = eventDate.getTime() - now.getTime();

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          );
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setCountdown({ days, hours, minutes, seconds });
        }
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [events]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/meetup-events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        const filteredEvents = data.events.filter(isVibeCodingEvent);
        setEvents(filteredEvents);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleScrollClick = useCallback(() => {
    const arrow = document.querySelector("[data-scroll-indicator]");
    if (arrow) {
      const arrowRect = arrow.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetScroll = scrollTop + arrowRect.bottom + 20;

      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  }, []);

  // Memoize particles (reduced count for performance)
  const particles = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: i * 2,
        duration: 20 + i * 3,
        left: i * 12 + 5,
        size: 3 + (i % 3),
      })),
    [],
  );

  // Memoize stars
  const stars = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        top: (i * 5 + Math.sin(i * 0.7) * 12) % 85,
        left: (i * 11 + Math.cos(i * 0.5) * 8) % 100,
        delay: (i % 10) * 0.25,
        size: 0.8 + (i % 4) * 0.6,
        brightness: 0.3 + (i % 6) * 0.12,
        color: i % 25 === 0 ? "#ffd89b" : i % 18 === 0 ? "#ff9eb5" : undefined,
      })),
    [],
  );

  // Memoize clouds - using deterministic pseudo-random to avoid hydration mismatch
  const clouds = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        // Deterministic pseudo-random based on index
        const pseudoRandom = (Math.sin(i * 12.9898 + 78.233) * 43758.5453) % 1;
        return {
          id: i,
          top: 2 + (i % 6) * 10 + Math.sin(i) * 5,
          duration: 60 + i * 15 + (i % 3) * 20,
          delay: i * -15 - Math.abs(pseudoRandom) * 30,
          opacity: 0.15 + (i % 4) * 0.08,
          scale: 0.6 + (i % 4) * 0.35,
          layer: i % 3,
        };
      }),
    [],
  );

  // Single shooting star state - appears randomly, one at a time
  const [shootingStar, setShootingStar] = useState<{
    id: number;
    top: number;
    left: number;
    direction: "tlbr" | "trbl" | "horizontal";
    duration: number;
    length: number;
  } | null>(null);

  // Shooting star spawner - random intervals, random direction
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let clearTimeoutId: ReturnType<typeof setTimeout>;
    let starId = 0;

    const spawnShootingStar = () => {
      const directions: Array<"tlbr" | "trbl" | "horizontal"> = [
        "tlbr",
        "trbl",
        "horizontal",
      ];
      const direction =
        directions[Math.floor(Math.random() * directions.length)];

      // Position based on direction
      let top: number, left: number;
      if (direction === "tlbr") {
        top = 5 + Math.random() * 25;
        left = 5 + Math.random() * 35;
      } else if (direction === "trbl") {
        top = 5 + Math.random() * 25;
        left = 60 + Math.random() * 30;
      } else {
        top = 10 + Math.random() * 35;
        left = -5 + Math.random() * 15;
      }

      const duration = 1.0 + Math.random() * 0.8; // 1.0-1.8s
      const length = 50 + Math.random() * 60; // 50-110px

      setShootingStar({
        id: starId++,
        top,
        left,
        direction,
        duration,
        length,
      });

      // Clear the star after animation completes
      clearTimeoutId = setTimeout(
        () => {
          setShootingStar(null);
        },
        duration * 1000 + 100,
      );

      // Schedule next shooting star (random 8-25 seconds)
      const nextDelay = 8000 + Math.random() * 17000;
      timeoutId = setTimeout(spawnShootingStar, nextDelay);
    };

    // Initial delay before first shooting star (5-12 seconds)
    const initialDelay = 5000 + Math.random() * 7000;
    timeoutId = setTimeout(spawnShootingStar, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(clearTimeoutId);
    };
  }, []);

  // Memoize fireflies (ambient floating lights)
  const fireflies = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: 5 + ((i * 8) % 90),
        bottom: 10 + ((i * 7) % 60),
        delay: i * 1.5,
        duration: 6 + (i % 4) * 2,
        size: 4 + (i % 3) * 2,
      })),
    [],
  );

  // Memoize shimmer sparkles for ocean reflection
  const shimmerSparkles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: 5 + ((i * 4.5) % 70),
        left: 30 + ((i * 2.1) % 40), // Centered where sun reflection would be
        delay: (i % 8) * 0.4,
        size: 3 + (i % 4) * 2,
      })),
    [],
  );

  // Click ripple state
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const rippleIdRef = useRef(0);

  // Click handler for ripple effect
  const handleClick = useCallback((e: React.MouseEvent) => {
    const id = rippleIdRef.current++;
    const x = e.clientX;
    const y = e.clientY;

    setRipples((prev) => [...prev, { id, x, y }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  }, []);

  return (
    <div onClick={handleClick} style={{ cursor: "default" }}>
      <Head>
        <title>Vibe Code Detroit - Community of Tech Enthusiasts</title>
        <meta
          name="description"
          content="Vibe Code Detroit is a community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

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

      {/* Mouse following glow effect */}
      <MouseGlow $x={mousePosition.x} $y={mousePosition.y} />

      {/* VHS Scanline overlay */}
      <ScanlineOverlay />

      {/* Sky overlay for day-night transition */}
      <SkyOverlay $scrollY={scrollY} $maxScroll={maxScroll} />

      {/* Horizon atmospheric glow */}
      <HorizonGlow $scrollY={scrollY} $maxScroll={maxScroll} />

      {/* Stars */}
      <StarsContainer $scrollY={scrollY} $maxScroll={maxScroll}>
        {stars.map((star) => (
          <Star
            key={star.id}
            $top={star.top}
            $left={star.left}
            $delay={star.delay}
            $size={star.size}
            $brightness={star.brightness}
            $color={star.color}
          />
        ))}
      </StarsContainer>

      {/* Shooting Star - single, rare phenomenon */}
      <ShootingStarsContainer $scrollY={scrollY} $maxScroll={maxScroll}>
        {shootingStar && (
          <ShootingStar
            key={shootingStar.id}
            $top={shootingStar.top}
            $left={shootingStar.left}
            $direction={shootingStar.direction}
            $duration={shootingStar.duration}
            $length={shootingStar.length}
          />
        )}
      </ShootingStarsContainer>

      {/* Moon */}
      <Moon $scrollY={scrollY} $maxScroll={maxScroll} />

      {/* Clouds */}
      <CloudsContainer $scrollY={scrollY} $maxScroll={maxScroll}>
        {clouds.map((cloud) => (
          <Cloud
            key={cloud.id}
            $top={cloud.top}
            $duration={cloud.duration}
            $delay={cloud.delay}
            $opacity={cloud.opacity}
            $scale={cloud.scale}
            $layer={cloud.layer}
          >
            <CloudPuff $layer={cloud.layer} />
            <CloudPuffExtra $layer={cloud.layer} />
          </Cloud>
        ))}
      </CloudsContainer>

      {/* Floating particles */}
      <ParticlesContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            $delay={particle.delay}
            $duration={particle.duration}
            $left={particle.left}
            $size={particle.size}
          />
        ))}
      </ParticlesContainer>

      {/* Ocean with sun reflection and waves */}
      <OceanContainer $scrollY={scrollY}>
        <SunReflection $scrollY={scrollY} />
        <WaveLayer $index={0} />
        <WaveLayer $index={1} />
        <WaveLayer $index={2} />
        <Ocean />
      </OceanContainer>

      {/* Ocean shimmer sparkles */}
      <OceanShimmerContainer $scrollY={scrollY} $maxScroll={maxScroll}>
        {shimmerSparkles.map((sparkle) => (
          <ShimmerSparkle
            key={sparkle.id}
            $top={sparkle.top}
            $left={sparkle.left}
            $delay={sparkle.delay}
            $size={sparkle.size}
          />
        ))}
      </OceanShimmerContainer>

      {/* Fireflies - ambient floating lights near horizon */}
      <FirefliesContainer $scrollY={scrollY} $maxScroll={maxScroll}>
        {fireflies.map((firefly) => (
          <Firefly
            key={firefly.id}
            $left={firefly.left}
            $bottom={firefly.bottom}
            $delay={firefly.delay}
            $duration={firefly.duration}
            $size={firefly.size}
          />
        ))}
      </FirefliesContainer>

      {/* Mountains silhouette */}
      <Mountains />

      {/* Large sunset sun - parallax with smooth interpolated scroll */}
      <SunsetSun $scrollY={scrollY} $maxScroll={maxScroll} />

      {/* Palm trees */}
      <LeftPalmTree />
      <RightPalmTree />

      {/* Animated grid */}
      <SynthwaveGrid />

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
            <HeroTextContainer>
              <Subtitle>
                Vibe Code Detroit is a community of tech enthusiasts and
                creators coming together to build meaningful solutions through
                Vibe Coding. Our goal is simple: leverage technology to foster
                genuine connections, empower local initiatives, and nurture a
                supportive ecosystem rooted deeply in community values.
              </Subtitle>
              <Description>
                Whether you&apos;re a developer, a designer, or simply
                tech-curious, join us as we explore collaborative coding
                sessions, workshops, and projects designed to uplift Detroit
                through innovation and creativity.
              </Description>
              <Tagline>
                <TaglineText>Together, let&apos;s code the vibe.</TaglineText>
              </Tagline>
            </HeroTextContainer>
          </Hero>

          {/* What is Vibe Coding Section */}
          <RevealOnScroll ref={vibeRef} $isVisible={vibeVisible}>
            <WhatIsVibeSection>
              <SectionTitle>What is Vibe Coding?</SectionTitle>
              <VibeGrid>
                <VibeCard $borderColor="#ff61a6">
                  <VibeIcon>
                    <TargetIcon />
                  </VibeIcon>
                  <VibeCardTitle>Intent Over Syntax</VibeCardTitle>
                  <VibeCardText>
                    Focus on what you want to build, not how to write it. Use AI
                    tools to translate your vision into code while you guide the
                    direction.
                  </VibeCardText>
                </VibeCard>
                <VibeCard $borderColor="#40f4ff">
                  <VibeIcon>
                    <HandshakeIcon />
                  </VibeIcon>
                  <VibeCardTitle>Collaborative Spirit</VibeCardTitle>
                  <VibeCardText>
                    Code together, learn together. Share knowledge, pair
                    program, and build projects that make a real impact in our
                    community.
                  </VibeCardText>
                </VibeCard>
                <VibeCard $borderColor="#ff914d">
                  <VibeIcon>
                    <RocketIcon />
                  </VibeIcon>
                  <VibeCardTitle>Ship Fast, Learn Faster</VibeCardTitle>
                  <VibeCardText>
                    Embrace rapid prototyping and iteration. The goal is
                    progress, not perfection. Launch, learn, and level up.
                  </VibeCardText>
                </VibeCard>
              </VibeGrid>
            </WhatIsVibeSection>
          </RevealOnScroll>

          {/* Community Stats Section */}
          <RevealOnScroll ref={statsRef} $isVisible={statsVisible}>
            <StatsSection>
              <SectionTitle>Community Stats</SectionTitle>
              <StatsGrid>
                <StatItem $isVisible={statsVisible} $delay={0}>
                  <StatNumber $color="#ff61a6">
                    {animatedStats.members}+
                  </StatNumber>
                  <StatLabel>Community Members</StatLabel>
                </StatItem>
                <StatItem $isVisible={statsVisible} $delay={0.2}>
                  <StatNumber $color="#40f4ff">
                    {animatedStats.events}
                  </StatNumber>
                  <StatLabel>Events Hosted</StatLabel>
                </StatItem>
                <StatItem $isVisible={statsVisible} $delay={0.4}>
                  <StatNumber $color="#ff914d">
                    {animatedStats.projects}
                  </StatNumber>
                  <StatLabel>Projects Built</StatLabel>
                </StatItem>
              </StatsGrid>
            </StatsSection>
          </RevealOnScroll>

          {/* Events Section with Countdown */}
          <RevealOnScroll ref={eventsRef} $isVisible={eventsVisible}>
            <EventsSection>
              <SectionTitle>Upcoming Events</SectionTitle>

              {/* Countdown to next event */}
              {events.length > 0 && (
                <CountdownSection>
                  <CountdownTitle>
                    <span
                      style={{
                        display: "inline-flex",
                        verticalAlign: "middle",
                        width: "24px",
                        height: "24px",
                        marginRight: "8px",
                      }}
                    >
                      <TimerIcon />
                    </span>
                    Next Event In
                  </CountdownTitle>
                  <CountdownTimer>
                    <CountdownItem>
                      <CountdownValue>{countdown.days}</CountdownValue>
                      <CountdownLabel>Days</CountdownLabel>
                    </CountdownItem>
                    <CountdownItem>
                      <CountdownValue>{countdown.hours}</CountdownValue>
                      <CountdownLabel>Hours</CountdownLabel>
                    </CountdownItem>
                    <CountdownItem>
                      <CountdownValue>{countdown.minutes}</CountdownValue>
                      <CountdownLabel>Minutes</CountdownLabel>
                    </CountdownItem>
                    <CountdownItem>
                      <CountdownValue>{countdown.seconds}</CountdownValue>
                      <CountdownLabel>Seconds</CountdownLabel>
                    </CountdownItem>
                  </CountdownTimer>
                </CountdownSection>
              )}

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
                          <span
                            style={{
                              display: "inline-flex",
                              verticalAlign: "middle",
                              width: "18px",
                              height: "18px",
                              marginRight: "6px",
                            }}
                          >
                            <LocationIcon />
                          </span>
                          {event.venue.name}, {event.venue.city},{" "}
                          {event.venue.state}
                        </EventLocation>
                      )}
                      <EventDescription>
                        {event.description.length > 300
                          ? `${event.description.substring(0, 300)}...`
                          : event.description}
                      </EventDescription>
                      <div style={{ textAlign: "center" }}>
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
          </RevealOnScroll>

          <EmailCapture
            title="Stay in the Vibe"
            subtitle="Get notified about upcoming meetups, workshops, and community events."
            placeholder="Enter your email to stay connected"
            buttonText="Join the Vibe"
          />
        </Main>
        <Footer>
          <FooterLink href="/roadmap">
            <span
              style={{
                display: "inline-flex",
                width: "20px",
                height: "20px",
                marginRight: "6px",
              }}
            >
              <MapIcon />
            </span>
            Development Roadmap
          </FooterLink>
        </Footer>
      </Page>

      {/* Click ripples */}
      {ripples.map((ripple) => (
        <ClickRipple key={ripple.id} $x={ripple.x} $y={ripple.y} />
      ))}
    </div>
  );
}
