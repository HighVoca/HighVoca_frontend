import styled from '@emotion/styled';

export const ProfileLayout = styled.div`
  width: 100%;
  flex-direction: row;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 3.2rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.2);
  background: rgba(19, 24, 66, 0.7);
  box-shadow:
    0 3rem 6rem -1.5rem rgba(0, 0, 0, 0.5),
    0 0.1rem 0.2rem 0 rgba(236, 206, 169, 0.1) inset;
`;

export const ProfileImage = styled.img`
  width: 9rem;
  height: 9rem;
  border: none;
`;

export const TextContainer = styled.div`
  gap: 0.7rem;
`;

export const UsernameText = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
`;

export const StreakText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.4rem;
  font-weight: 600;
`;

export const LevelBadge = styled.div`
  width: 10rem;
  height: 2.4rem;
  justify-content: center;
  border-radius: 3.7rem;
  background: linear-gradient(180deg, #e68369 0%, #d97359 100%);
  box-shadow:
    0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.1),
    0 0.1rem 0.2rem -0.1rem rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  font-weight: 600;
`;
