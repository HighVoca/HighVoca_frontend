import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.15);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

export const CheckStepLayout = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem 0 3rem 0;
  gap: 0.8rem;
`;

export const Logo = styled.img`
  width: 10rem;
  padding-bottom: 2.5rem;
  animation: ${bounce} 0.4s ease-out;
`;

export const OnboardingTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const OnboargindSubtext = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: 1rem;
`;
