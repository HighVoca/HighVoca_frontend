import styled from '@emotion/styled';

interface WordTabLayoutProps {
	size: 'small' | 'large';
}

interface WordTabButtonProps {
	isClicked: boolean;
}

export const WordTabLayout = styled.div<WordTabLayoutProps>`
  flex-direction: row;
  width: 100%;
  height: ${({ size }) => (size === 'large' ? '6rem' : '5rem')};
  gap: 1rem;
  padding: 1rem;
  border-radius: 2.4rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.20);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.50), 0 1px 2px 0 rgba(236, 206, 169, 0.10) inset;
`;

export const WordTabButton = styled.button<WordTabButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 2.4rem;
  box-shadow: ${({ isClicked }) => isClicked && '0 0.4rem 1.2rem -0.2rem rgba(230, 131, 105, 0.5)'};
  background: ${({ isClicked, theme }) => isClicked && theme.colors.primary};
  color: ${({ isClicked, theme }) => (isClicked ? theme.colors.white : theme.colors.secondary)};
  font-size: 1.4rem;
  font-weight: 700;


`;
