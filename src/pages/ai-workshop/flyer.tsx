import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      135deg,
      rgba(46, 26, 71, 0.8) 0%,
      rgba(27, 20, 100, 0.8) 50%,
      rgba(46, 26, 71, 0.8) 100%
    ),
    url("/images/vibe-code-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FlyerContainer = styled.div`
  width: 600px;
  height: 400px;
  background: rgba(27, 20, 100, 0.9);
  border: 2px solid #ff61a6;
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
    height: auto;
    min-height: 400px;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.8rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  text-align: center;
  min-width: 0;
`;

const RightSection = styled.div`
  flex: 1;
  text-align: left;
  min-width: 0;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0rem;
`;

const Logo = styled.div`
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    width: 200px;
    height: 80px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const EventTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ff61a6;
  margin: 0;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 0.3px;
  }
`;

const EventSubtitle = styled.div`
  font-size: 0.8rem;
  color: #40f4ff;
  font-weight: 500;
  margin-bottom: 0.8rem;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 0.6rem;
  }
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 0 0 0.8rem 0;
  padding: 0.6rem;
  background: rgba(64, 244, 255, 0.1);
  border: 1px solid rgba(64, 244, 255, 0.3);
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    gap: 0.1rem;
    padding: 0.5rem;
    margin: 0 0 0.6rem 0;
  }
`;

const DetailItem = styled.div`
  text-align: center;
`;

const DetailLabel = styled.div`
  font-size: 0.6rem;
  color: #40f4ff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.2rem;
  font-family: "Poppins", sans-serif;
`;

const DetailValue = styled.div`
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: 600;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const EventDescription = styled.p`
  font-size: 0.75rem;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.9);
  margin: 0.5rem 0;
  font-family: "Poppins", sans-serif;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    line-height: 1.2;
    margin: 0.4rem 0;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(45deg, #ff61a6, #ff914d);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.65rem;
  }
`;

const Sponsors = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 145, 77, 0.1);
  border: 1px solid rgba(255, 145, 77, 0.3);
  border-radius: 6px;
  text-align: center;
`;

const SponsorsTitle = styled.div`
  font-size: 0.55rem;
  color: #ff914d;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  margin-bottom: 0.2rem;
  font-family: "Poppins", sans-serif;
`;

const SponsorsList = styled.div`
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: "Poppins", sans-serif;
`;

export default function AIWorkshopFlyer() {
  return (
    <>
      <Head>
        <title>AI Workshop Flyer - Vibe Code Detroit</title>
        <meta
          name="description"
          content="Join us for the AI in Software Development Workshop on August 20th at Bamboo Royal Oak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Page>
        <FlyerContainer>
          <LeftSection>
            <LogoContainer>
              <Logo>
                <Image
                  src="/images/vibe-code-detroit.png"
                  alt="Vibe Code Detroit"
                  width={250}
                  height={250}
                  priority
                />
              </Logo>
            </LogoContainer>

            <EventTitle>Workflow Rewired: <br/>AI in Software Development</EventTitle>
          </LeftSection>

          <RightSection>
            <EventDetails>
              <DetailItem>
                <DetailValue>August 20th • 6:00 PM</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailValue>Bamboo Royal Oak</DetailValue>
              </DetailItem>
            </EventDetails>

            <EventDescription>
              Join us for a hands-on, collaborative workshop that explores how AI is reshaping software development. 
              Led by senior software engineers, learn how AI is transforming developer workflows and get hands-on 
              experience building an app with AI tools.
            </EventDescription>

            <EventDescription>
              <strong>Free dinner & drinks provided!</strong>
            </EventDescription>

            <Sponsors>
              <SponsorsTitle>Sponsored by</SponsorsTitle>
              <SponsorsList>
                Stand With Crypto • Bamboo Royal Oak
              </SponsorsList>
            </Sponsors>
          </RightSection>
        </FlyerContainer>
      </Page>
    </>
  );
}
