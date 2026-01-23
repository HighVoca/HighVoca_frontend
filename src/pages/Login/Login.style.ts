import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 4.8rem;
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
