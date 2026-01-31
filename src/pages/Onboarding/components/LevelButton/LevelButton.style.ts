import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface LevelButtonLayoutProps {
	isClicked: boolean;
}
interface LevelIconProps {
	isClicked: boolean;
}

export const LevelButtonLayout = styled.button<LevelButtonLayoutProps>`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  height: 7rem;
  padding: 0 1.4rem;
  gap: 1rem;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.10);

  transition:
  transform 0.15s ease,
  box-shadow 0.15s ease,
  background-color 0.2s ease;

  &:active {
    transform: scale(0.96);
  }

  ${({ isClicked }) =>
		isClicked &&
		css`
      transform: scale(1.04);
      box-shadow: 0 8px 20px -4px rgba(230, 131, 105, 0.30);
  `}

  &:hover {
    ${({ isClicked }) =>
			!isClicked &&
			css`
        transform: scale(1.02);
    `}
  }
`;

export const LevelIcon = styled.div<LevelIconProps>`
  width: 4rem;
  height: 4rem;
  justify-content: center;
  font-size: 2rem;
  border-radius: ${({ isClicked }) => isClicked && '2.5rem'};
  background: ${({ isClicked }) => isClicked && `rgba(230, 131, 105, 0.20)`};
`;

export const TextContainer = styled.div`
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const LevelText = styled.p`
  font-size: 1.6rem;
`;

export const LevelDescription = styled.p`
  font-size: 1rem;
`;

export const CheckBox = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  justify-content: center;
  margin-left: auto;
  border-radius: 50%;
  font-size: 3rem;
  background: ${({ theme }) => theme.colors.primary};
`;
