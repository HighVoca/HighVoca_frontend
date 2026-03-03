import styled from '@emotion/styled';

interface ToggleProps {
  isOn: boolean;
}

export const ToggleLayout = styled.button<ToggleProps>`
  justify-content: flex-start;
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 999px;
  padding: 0.2rem;
  cursor: pointer;
  transition: background 0.3s ease;

  background: ${({ isOn }) =>
    isOn
      ? 'linear-gradient(90deg, #E68369 0%, #ECCEA9 100%)'
      : 'rgba(236, 206, 169, 0.2)'};
`;

export const ToggleCircle = styled.div<ToggleProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #ffffff;
  transition: transform 0.3s ease;

  transform: ${({ isOn }) => (isOn ? 'translateX(2.4rem)' : 'translateX(0)')};
`;
