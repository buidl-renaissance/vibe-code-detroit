import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: 0;
  text-align: center;
  max-width: 400px;
`;

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 250px;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: #666;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: #4f46e5;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #4338ca;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #6b7280;
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled.div<{ type: 'success' | 'error' }>`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  background: ${props => props.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
  color: ${props => props.type === 'success' ? '#22c55e' : '#ef4444'};
  border: 1px solid ${props => props.type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'};
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
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          required
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </Button>
      </Form>

      {status === 'success' && (
        <Message type="success">{message}</Message>
      )}
      
      {status === 'error' && (
        <Message type="error">{message}</Message>
      )}
    </Container>
  );
}
