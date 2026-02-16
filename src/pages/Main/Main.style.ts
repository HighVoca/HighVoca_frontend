import styled from '@emotion/styled';

export const MainLayout = styled.div`
  width: 100%;
  justify-content: space-between;
  padding-bottom: 14rem;
  gap: 1rem;
`;

export const TabContainer = styled.div`
  position: sticky;
  top:0;
  width: 100%;
  gap: 0.5rem;
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.bgBlack};
`;