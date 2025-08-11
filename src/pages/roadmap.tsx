import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

// Styled Components
const Page = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563eb;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(37, 99, 235, 0.1);
  }
`;

const Document = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 8px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem 0;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0 0 3rem 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  text-align: center;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`;

const PhaseBadge = styled.div`
  background: #2563eb;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionGoal = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const FeatureSection = styled.div`
  margin-bottom: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }
`;

const PriorityBadge = styled.span`
  background: #dc2626;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  
  li {
    color: #374151;
    margin: 0.8rem 0;
    padding-left: 1.5rem;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #2563eb;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
`;

const SubFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 1rem;
  
  li {
    color: #6b7280;
    margin: 0.4rem 0;
    padding-left: 1.2rem;
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    line-height: 1.5;
    
    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #9ca3af;
      font-weight: bold;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 3rem;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  text-align: center;
`;

const FooterText = styled.p`
  color: #6b7280;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
`;

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Roadmap - Vibe Code Detroit</title>
        <meta name="description" content="Development roadmap for Vibe Code Detroit - Phase 1: Core Product & Admin Experience, Phase 2: Federated Ecosystem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Page>
        <Container>
          <BackButton href="/">
            ← Back to Home
          </BackButton>
          
          <Document>
            <Title>Development Roadmap</Title>
            <Subtitle>
              Our journey to build a vibrant tech community platform that connects Detroit&apos;s creative minds
            </Subtitle>

            <Section>
              <SectionHeader>
                <PhaseBadge>1</PhaseBadge>
                <div>
                  <SectionTitle>Core Product & Admin Experience</SectionTitle>
                  <SectionGoal>
                    Have a functioning public site with an admin panel to manage the main content types: Events, Projects, Blog.
                  </SectionGoal>
                </div>
              </SectionHeader>

              <FeatureSection>
                <FeatureTitle>
                  Projects Directory
                  <PriorityBadge>Priority #1</PriorityBadge>
                </FeatureTitle>
                <FeatureList>
                  <li>Admin Tools: Add/create/edit projects from backend</li>
                  <li>Public Pages: Project list view with filters (topic, status, community)</li>
                  <li>Individual project detail pages with description, media, contact link</li>
                  <li>Linked Content: Blogs related to the project automatically listed on the project page</li>
                </FeatureList>
              </FeatureSection>

              <FeatureSection>
                <FeatureTitle>Blog System</FeatureTitle>
                <FeatureList>
                  <li>Adapt Barefoot Dev&apos;s blog components</li>
                  <li>Admin Tools: Create/edit posts in the panel</li>
                  <li>Content Strategy</li>
                  <SubFeatureList>
                    <li>Project updates</li>
                    <li>Event recaps</li>
                    <li>Announcements</li>
                  </SubFeatureList>
                  <li>Cross-linking: Blog posts link to related projects/events</li>
                </FeatureList>
              </FeatureSection>

              <FeatureSection>
                <FeatureTitle>Events Listing</FeatureTitle>
                <FeatureList>
                  <li>Integrate simplified version of ArtNight&apos;s events admin</li>
                  <li>Public Pages: Event list view (by date)</li>
                  <li>Event detail pages with description, time, location, and related projects/blogs</li>
                </FeatureList>
              </FeatureSection>

              <FeatureSection>
                <FeatureTitle>Admin Panel Integration</FeatureTitle>
                <FeatureList>
                  <li>Single dashboard for managing projects, events, and blogs</li>
                  <li>Ability to attach tags/categories for cross-content linking</li>
                </FeatureList>
              </FeatureSection>
            </Section>

            <Section>
              <SectionHeader>
                <PhaseBadge>2</PhaseBadge>
                <div>
                  <SectionTitle>Federated Ecosystem</SectionTitle>
                  <SectionGoal>
                    Make Vibecode Detroit part of a shared network of events/projects/blogs, allowing multiple sites to exchange data seamlessly.
                  </SectionGoal>
                </div>
              </SectionHeader>

              <FeatureSection>
                <FeatureTitle>Federated Data Model</FeatureTitle>
                <FeatureList>
                  <li>Define shared schemas for events, projects, and blogs</li>
                  <li>Add API endpoints for public consumption and for syncing with other sites (e.g., BuildDetroit, ArtNight)</li>
                </FeatureList>
              </FeatureSection>

              <FeatureSection>
                <FeatureTitle>Cross-Site Content Sync</FeatureTitle>
                <FeatureList>
                  <li>Auto-import events/projects/blogs from connected community sites</li>
                  <li>Enable publishing from Vibecode Detroit to partner platforms</li>
                </FeatureList>
              </FeatureSection>

              <FeatureSection>
                <FeatureTitle>Decentralized Foundations</FeatureTitle>
                <FeatureList>
                  <li>Explore DID (Decentralized Identifier) support for future user account systems</li>
                  <li>Maintain compatibility so contributors from other sites can post without &quot;double accounts&quot;</li>
                </FeatureList>
              </FeatureSection>
            </Section>

            <Footer>
              <FooterText>
                Phase 1 is about having a polished, working site with an easy backend for admins, and Phase 2 is about turning it into a hub in the wider Renaissance City Launchpad network.
              </FooterText>
            </Footer>
          </Document>
        </Container>
      </Page>
    </>
  );
}
