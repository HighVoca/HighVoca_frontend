import styled from '@emotion/styled';

interface SubmitButtonLayoutProps {
	isDisable?: boolean;
}

export const SubmitButtonLayout = styled.button<SubmitButtonLayoutProps>`
  width: 34.5rem;
  height: 6rem;
  margin-top: auto;
  border-radius: 2rem;
  background: linear-gradient(180deg, #E68369 0%, #D97359 100%);
  box-shadow: 0 1rem 2.5rem 0 rgba(230, 131, 105, 0.40), 0 0.1rem 0 0 rgba(255, 255, 255, 0.20) inset;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  font-weight: 700;

  border: ${({ isDisable }) => !isDisable && '0.1rem solid rgba(236, 206, 169, 0.20)'};
  background: ${({ isDisable, theme }) => (isDisable ? theme.colors.bgBlack : 'linear-gradient(180deg, #E68369 0%, #D97359 100%)')};
  box-shadow: ${({ isDisable }) => (isDisable ? 'none' : '0 1rem 2.5rem 0 rgba(230, 131, 105, 0.40), 0 0.1rem 0 0 rgba(255, 255, 255, 0.20) inset')};
  color: ${({ isDisable, theme }) => (isDisable ? theme.colors.gray : theme.colors.white)};

  &:disabled {
    cursor: not-allowed; 
  }
`;
