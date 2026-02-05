import styled from '@emotion/styled';

export const NavigateBarLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 6.5rem;
  padding: 1rem 2rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray};
`;

export const StudyButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  top: -3rem;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
  border: 0.3rem solid ${({ theme }) => theme.colors.bgBlack};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`;

export const NavigateTab = styled.div`
  width: 13rem;
`;