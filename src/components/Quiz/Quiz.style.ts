import styled from '@emotion/styled';

export const QuizLayout = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2rem;
  gap: 2rem;
  position: relative;
`;

export const QuizHeader = styled.div`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  font-size: 1.4rem;
  font-weight: 700;
`;

export const IconWrapper = styled.button`
  height: 3.4rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.2);
  border-radius: 50%;
`;

export const ProgressBar = styled.div`
  align-items: flex-start;
  width: 100%;
  height: 1rem;
  margin-top: 1rem;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #ffb86c, #ff7b5a);
  transition: width 0.3s ease-out;
`;

export const WordContainer = styled.div`
  justify-content: center;
  width: 100%;
  height: 27rem;
  gap: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray};
  border-radius: 2rem;
  font-size: 6rem;
  font-weight: 700;
`;

export const PronunciationSpan = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.8rem;
  font-weight: 600;
`;

export const PronunciationAudio = styled.button`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow:
    0 1rem 1.5rem -0.3rem rgba(230, 131, 105, 0.3),
    0 0.4rem 0.6rem -0.4rem rgba(230, 131, 105, 0.3);
`;

export const AnswerInput = styled.input`
  width: 100%;
  padding: 1.6rem 2.4rem;
  background: ${({ theme }) => theme.colors.bgBlack};
  border: 0.1rem solid ${({ theme }) => theme.colors.gray};
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.8rem;
  font-weight: 600;

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const ButtonField = styled.div`
  flex-direction: row;
  gap: 0.8rem;
`;

export const OptionButton = styled.button`
  width: 10rem;
  height: 6.6rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray};
  border-radius: 2rem;
`;
