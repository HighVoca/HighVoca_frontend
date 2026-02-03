import styled from '@emotion/styled';

export const ResultStepLayout = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
  padding-bottom: 5rem;
  gap: 1rem;
  h1, h2, p{
    text-align: center;
  }
`;

export const ResultStepTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const ResultStepSubtitle = styled.h2`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Logo = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
`;

export const RankBox = styled.div`
  position: absolute;
  top: -1.2rem;
  width: 12rem;
  height: 3rem;
  justify-content: center;
  border-radius: 3rem;
  box-shadow: 0 10px 15px -3px rgba(230, 131, 105, 0.30), 0 4px 6px -4px rgba(230, 131, 105, 0.30);
  background: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 700;
`;

export const RankContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 5rem 0;
  gap: 1rem;
  border-radius: 3.2rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.20);
  box-shadow: 0 2rem 4rem -1.2rem rgba(0, 0, 0, 0.50);
`;

export const RankText = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

export const RankHighlight = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
  font-weight: 700;
`;

export const DescriptionText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.4rem;
  font-weight: 600;
`;

export const LevelBox = styled.div`
`;
