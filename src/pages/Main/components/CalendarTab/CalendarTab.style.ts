import styled from '@emotion/styled';

export const CalendarTabLayout = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  gap: 1rem;
  padding: 1rem;
  border-radius: 2.4rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.2);
  box-shadow:
    0 20px 40px -12px rgba(0, 0, 0, 0.5),
    0 1px 2px 0 rgba(236, 206, 169, 0.1) inset;
  font-size: 1.4rem;
`;

export const CalendarContainer = styled.div`
  flex-direction: row;
  gap: 0.5rem;
`;

export const LevelContainer = styled.div`
  flex-direction: row;
  gap: 0.5rem;
`;

export const LevelBox = styled.div`
  flex-direction: row;
  width: 6rem;
  justify-content: center;
`;
