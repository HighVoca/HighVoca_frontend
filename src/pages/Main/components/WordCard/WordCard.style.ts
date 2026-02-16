import styled from '@emotion/styled';

export const WordCardLayout = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
  padding: 2rem;
  border-radius: 2.4rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.20);
  box-shadow: 0 2.4rem 4.8rem -1.6rem rgba(0, 0, 0, 0.40);
`;

export const TextContainer = styled.div`
  align-items: flex-start;
  gap: 0.5rem;
`;

export const MainText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
`;

export const SubText = styled.p`
  height: 3rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.6rem;
  font-weight: 500;
`;

export const SpellingButton = styled.button`
  width: 9rem;
  height: 3rem;
  justify-content: center;
  border-radius: 1rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.20);
  background: rgba(230, 131, 105, 0.20);
  box-shadow: 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.10), 0 0.1rem 0.2rem -0.1rem rgba(0, 0, 0, 0.10);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 700;
`;

export const SupportContainer = styled.div`
`;

export const WrongBadge = styled.div`
  width: 5.5rem;
  height: 2.7rem;
  justify-content: center;
  border-radius: 3.7rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.30);
  background: linear-gradient(135deg, rgba(230, 131, 105, 0.30) 0%, rgba(230, 131, 105, 0.20) 100%);
  box-shadow: 0 0.4rem 1.2rem -0.2rem rgba(230, 131, 105, 0.50), 0 0.1rem 0.2rem 0 rgba(236, 206, 169, 0.20) inset, 0 0 1.2rem 0 rgba(230, 131, 105, 0.30);
  color:${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;
