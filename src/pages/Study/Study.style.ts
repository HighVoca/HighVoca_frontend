import styled from '@emotion/styled';

export const StudyLayout = styled.div`
  width: 100%;
`;

export const Icon = styled.img`
  width: 10rem;
`;

export const SettingContainer = styled.div`
  width: 100%;
  gap: 1rem;
  padding: 2.5rem;
  border-radius: 3.2rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.20);
  background: rgba(19, 24, 66, 0.70);
  box-shadow: 0 2rem 4rem -1.2rem rgba(0, 0, 0, 0.50);
`;

export const Subtext = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;

export const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.6rem;
  font-weight: 700;
`;

export const GoalText = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const SettingButton = styled.button`
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  padding: 0 1.5rem;
  border-radius: 2rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.20);
  background: rgba(19, 24, 66, 0.50);
  font-size: 1.4rem;
  font-weight: 600;
`;

export const LeftArea = styled.div`
  flex-direction: row;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const IconWrapper = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  justify-content: center;
  border-radius: 2.4rem;
  background: rgba(230, 131, 105, 0.20);  
`;