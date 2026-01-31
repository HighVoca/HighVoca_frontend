import styled from '@emotion/styled';

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
  padding-bottom: 4.8rem;
`;

export const LogoContainer = styled.div`
  width: 100%;
  gap: 1rem;
  margin: auto 0;
`;

export const LogoIcon = styled.img`
  width: 10rem;
`;

export const Logo = styled.h1`
  font-size: 6rem;
  background: ${({ theme }) => theme.colors.gradientCenter};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtext = styled.h2`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.secondary}
`;

export const LoginContainer = styled.div`
  gap: 1.6rem;
  padding: 2rem 1rem;
  border-radius: 32px;
  border: 1px solid rgba(236, 206, 169, 0.20);
  box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.50), 0 1px 2px 0 rgba(236, 206, 169, 0.10) inset;
`;

export const LoginText = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.secondary}
`;

export const LoginButton = styled.button`
  width: 100%;
`;
