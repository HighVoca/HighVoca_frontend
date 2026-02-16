import styled from '@emotion/styled';

export const NavigateBarLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6.5rem;
  padding: 1rem 2rem;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.bgBlack};
`;

export const StudyButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  width: 6.5rem;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
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
