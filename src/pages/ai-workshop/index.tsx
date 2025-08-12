import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

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
  padding: 2rem;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
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

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #40f4ff;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  background: rgba(64, 244, 255, 0.1);
  border: 1px solid rgba(64, 244, 255, 0.3);

  &:hover {
    background: rgba(64, 244, 255, 0.2);
    box-shadow: 0 0 10px rgba(64, 244, 255, 0.3);
  }
`;

const EventHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(27, 20, 100, 0.4);
  border: 2px solid #ff61a6;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(255, 97, 166, 0.3);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const EventTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff61a6;
  margin: 0 0 1rem 0;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
`;

const EventDate = styled.div`
  font-size: 1.5rem;
  color: #40f4ff;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
`;

const EventLocation = styled.div`
  font-size: 1.2rem;
  color: #ff914d;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
`;

const BannerImage = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(64, 244, 255, 0.3);

  @media (max-width: 768px) {
    margin: 0 auto 2rem auto;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(27, 20, 100, 0.4);
  border: 2px solid #40f4ff;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(64, 244, 255, 0.3);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #40f4ff;
  margin: 0 0 1.5rem 0;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 1rem 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "•";
    color: #ff61a6;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const FacilitatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FacilitatorCard = styled.div`
  padding: 1.5rem;
  background: rgba(255, 97, 166, 0.1);
  border: 1px solid rgba(255, 97, 166, 0.3);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 97, 166, 0.15);
    box-shadow: 0 0 15px rgba(255, 97, 166, 0.3);
  }
`;

const FacilitatorName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ff61a6;
  margin: 0 0 0.5rem 0;
  font-family: "Poppins", sans-serif;
`;

const FacilitatorTitle = styled.div`
  font-size: 0.9rem;
  color: #40f4ff;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FacilitatorBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-family: "Poppins", sans-serif;
`;

const SponsorSection = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(255, 145, 77, 0.1);
  border: 1px solid rgba(255, 145, 77, 0.3);
  border-radius: 15px;
`;

const SponsorTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #ff914d;
  margin: 0 0 1rem 0;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SponsorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SponsorCard = styled.div`
  padding: 1rem;
  background: rgba(255, 145, 77, 0.05);
  border: 1px solid rgba(255, 145, 77, 0.2);
  border-radius: 10px;
`;

const SponsorName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #ff914d;
  margin-bottom: 0.5rem;
  font-family: "Poppins", sans-serif;
`;

const SponsorDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-family: "Poppins", sans-serif;
`;

export default function AIWorkshop() {
  return (
    <>
      <Head>
        <title>AI in Software Development Workshop - Vibe Code Detroit</title>
        <meta
          name="description"
          content="Join us for a hands-on workshop exploring how AI is reshaping software development. Learn from senior engineers and get hands-on experience with AI tools."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="/images/vibe-code-detroit-featured.png" />
        <meta property="og:title" content="AI in Software Development Workshop - Vibe Code Detroit" />
        <meta property="og:description" content="Join us for a hands-on workshop exploring how AI is reshaping software development. Learn from senior engineers and get hands-on experience with AI tools." />
        <meta property="og:url" content="https://vibecodedetroit.com/ai-workshop" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Page>
        <Container>
          <BackButton href="/">
            ← Back to Home
          </BackButton>

          <EventHeader>
            <EventTitle>AI in Software Development Workshop</EventTitle>
            <EventDate>August 20th</EventDate>
            <EventLocation>📍 Bamboo Royal Oak</EventLocation>
          </EventHeader>

          <Section>
            <SectionTitle>About the Workshop</SectionTitle>
            <Description>
              Join us for a hands-on, collaborative workshop that explores how AI is reshaping software development. 
              Led by senior software engineers, this session explores how AI is transforming developer workflows—shifting 
              roles from coding everything to managing agents, and impacting team productivity and software development processes.
            </Description>
            <Description>
              Key topics include delegating tasks to AI agents, evaluating AI-generated work, and addressing challenges like context and security. 
              Participants will also get hands-on experience in small groups, building an app with AI tools and sharing insights on new workflows and techniques.
            </Description>
            <Description>
              <strong>Free dinner & drinks provided!</strong>
            </Description>
            <Description>
              This workshop from Detroit Vibe Coding is in collaboration with Developers of Detroit and the Detroit Blockchain Collective.
            </Description>
          </Section>

          <Section>
            <SectionTitle>Who Should Attend</SectionTitle>
            <List>
              <ListItem>Software developers interested in AI-assisted coding and agent-based workflows</ListItem>
              <ListItem>Technical product managers exploring how AI is reshaping dev processes</ListItem>
              <ListItem>Engineers curious about delegating tasks to AI and evaluating its output</ListItem>
              <ListItem>Anyone eager to understand and experiment with real-world AI dev tools</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Why You Should Attend</SectionTitle>
            <List>
              <ListItem>Understand how AI is reshaping software development workflows and team roles</ListItem>
              <ListItem>Learn to delegate tasks to AI agents and evaluate their output effectively</ListItem>
              <ListItem>Get hands-on experience building an app using modern AI development tools</ListItem>
              <ListItem>Explore real-world challenges around context management, integration, and security</ListItem>
              <ListItem>Discover how AI can boost productivity while shifting how teams collaborate and build</ListItem>
            </List>
          </Section>

          <Section>
            <SectionTitle>Meet Your Workshop Facilitators</SectionTitle>
            <FacilitatorGrid>
              <FacilitatorCard>
                <FacilitatorName>David Baird</FacilitatorName>
                <FacilitatorTitle>MySALT AI Founder</FacilitatorTitle>
                <FacilitatorBio>
                  David Baird is a serial tech entrepreneur and founder of MySALT AI, an AI-powered social platform where he personally 
                  led the full-stack and mobile app development. He brings over a decade of experience launching startups, building engineering teams, 
                  and placing over $10 million in technical talent through his company, BairdTech. His work centers on AI-first development, 
                  using tools like Cursor, Claude, and Gemini to create agentic systems and scalable applications.
                </FacilitatorBio>
              </FacilitatorCard>

              <FacilitatorCard>
                <FacilitatorName>Josh Crites</FacilitatorName>
                <FacilitatorTitle>Senior Software Engineer & DevRel</FacilitatorTitle>
                <FacilitatorBio>
                  Josh is a seasoned educator, developer advocate and senior software engineer with years of experience helping developers 
                  master technical foundations. He has taught thousands through his work with ConsenSys and Celo, and now as a DevRel at Aztec. 
                  Josh designs learning experiences that empower devs to explore complex technologies through practical experimentation.
                </FacilitatorBio>
              </FacilitatorCard>

              <FacilitatorCard>
                <FacilitatorName>Elizabeth Hansson</FacilitatorName>
                <FacilitatorTitle>Detroit Blockchain Collective Founder & Executive Director</FacilitatorTitle>
                <FacilitatorBio>
                  Elizabeth created the Detroit Blockchain Collective with the purpose of fostering blockchain innovation in Michigan 
                  through grassroots community and education. She is a digital asset advocate, ecosystem builder, and technology strategist 
                  with a background in decentralized systems and software engineering. Since 2017, she has led teams of blockchain developers.
                </FacilitatorBio>
              </FacilitatorCard>

              <FacilitatorCard>
                <FacilitatorName>Donovan Brown</FacilitatorName>
                <FacilitatorTitle>Web Developer & Community Leader</FacilitatorTitle>
                <FacilitatorBio>
                  Donovan leveraged his early experience as a CompTIA A+ Certified Technician to independently build a strong career 
                  in modern web development. He actively volunteers his time leading IT education programs and speaking at community events, 
                  where he inspires both youth and adults to build confidence with technology. Donovan is deeply committed to closing the digital divide.
                </FacilitatorBio>
              </FacilitatorCard>
            </FacilitatorGrid>
          </Section>

          <Section>
            <SponsorSection>
              <SponsorTitle>A Big Thank You to Our Sponsors!</SponsorTitle>
              <SponsorGrid>
                <SponsorCard>
                  <SponsorName>Stand With Crypto</SponsorName>
                  <SponsorDescription>
                    A non-profit organization dedicated to uniting global crypto advocates. They are empowering the blockchain community 
                    through advocacy, education, and grassroots engagement!
                  </SponsorDescription>
                </SponsorCard>
                <SponsorCard>
                  <SponsorName>Bamboo Royal Oak</SponsorName>
                  <SponsorDescription>
                    A provider of all-inclusive coworking space and private offices, Bamboo is building a more inclusive and innovative world, 
                    with flexible space and entrepreneurial community!
                  </SponsorDescription>
                </SponsorCard>
              </SponsorGrid>
            </SponsorSection>
          </Section>
        </Container>
      </Page>
    </>
  );
}
