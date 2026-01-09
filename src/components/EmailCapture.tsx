import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(64, 244, 255, 0.3), inset 0 0 20px rgba(64, 244, 255, 0.05);
  }
  50% {
    box-shadow: 0 0 30px rgba(64, 244, 255, 0.5), inset 0 0 25px rgba(64, 244, 255, 0.1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  background: rgba(27, 20, 100, 0.4);
  border-radius: 20px;
  border: 2px solid rgba(64, 244, 255, 0.3);
  backdrop-filter: blur(10px);
  animation: ${glowPulse} 4s ease-in-out infinite;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }
`;

const Title = styled.h2`
  color: #40f4ff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  text-align: center;
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(64, 244, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
  text-align: center;
  max-width: 400px;
  font-family: "Poppins", sans-serif;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 97, 166, 0.4);
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #ff61a6;
    box-shadow: 0 0 20px rgba(255, 97, 166, 0.3);
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: white;
  font-family: "Poppins", sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  padding: 0.875rem 1.75rem;
  margin: 0.35rem;
  border: none;
  border-radius: 50px;
  background: linear-gradient(135deg, #ff61a6 0%, #ff914d 100%);
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover:not(:disabled) {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 97, 166, 0.5);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.25rem;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
  }
`;

const Message = styled.div<{ $type: 'success' | 'error' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  font-family: "Poppins", sans-serif;
  background: ${props => props.$type === 'success' 
    ? 'rgba(64, 244, 255, 0.1)' 
    : 'rgba(255, 97, 166, 0.1)'};
  color: ${props => props.$type === 'success' ? '#40f4ff' : '#ff61a6'};
  border: 1px solid ${props => props.$type === 'success' 
    ? 'rgba(64, 244, 255, 0.3)' 
    : 'rgba(255, 97, 166, 0.3)'};
`;

interface EmailCaptureProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
}

export default function EmailCapture({
  title = "Stay Updated",
  subtitle = "Subscribe to our newsletter for the latest updates and exclusive content.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe"
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            required
          />
          <Button type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? '...' : buttonText}
          </Button>
        </InputWrapper>
      </Form>

      {status === 'success' && (
        <Message $type="success">{message}</Message>
      )}
      
      {status === 'error' && (
        <Message $type="error">{message}</Message>
      )}
    </Container>
  );
}
