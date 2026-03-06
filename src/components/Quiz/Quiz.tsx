import * as S from './Quiz.style';
import IcClose from '../../assets/svgs/IcClose';
import IcVoice from '../../assets/svgs/IcVoice';
import IcHint from '../../assets/svgs/IcHint';
import IcSubmit from '../../assets/svgs/IcSubmit';
import IcWrong from '../../assets/svgs/IcWrong';
import { useEffect, useMemo, useRef, useState } from 'react';
import Toast, { useToast } from './Toast/Toast';

type QuizQuestion = {
  id: string;
  word: string;
  pronunciation: string;
  answer: string;
};

const MAX_ATTEMPTS = 3;
const TOAST_MS = 1400;

export default function Quiz() {
  const questions: QuizQuestion[] = useMemo(
    () => [
      { id: 'q1', word: 'apple', pronunciation: '/ˈæp.əl/', answer: '사과' },
      { id: 'q2', word: 'banana', pronunciation: '/bəˈnɑː.nə/', answer: '바나나' },
      { id: 'q3', word: 'book', pronunciation: '/bʊk/', answer: '책' },
    ],
    []
  );

  const MAX_NUM = questions.length;

  const [curIndex, setCurIndex] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS);
  const [answerInput, setAnswerInput] = useState('');
  const { toast, showToast } = useToast(TOAST_MS);
  const nextTimerRef = useRef<number | null>(null);

  const current = questions[curIndex];
  const CUR_NUM = curIndex + 1;

  const progressPercent = Math.max(0, Math.min(100, (CUR_NUM / MAX_NUM) * 100));

  const goNextQuestion = () => {
    setCurIndex((prev) => {
      const next = prev + 1;
      return next >= questions.length ? prev : next;
    });
    setAttemptsLeft(MAX_ATTEMPTS);
    setAnswerInput('');
  };

  const revealAnswerAndNext = () => {
    showToast(`정답: ${current.answer}`, 'info');
    if (nextTimerRef.current) window.clearTimeout(nextTimerRef.current);
    nextTimerRef.current = window.setTimeout(() => {
      goNextQuestion();
    }, TOAST_MS);
  };

  const handleSubmit = () => {
    const normalizedInput = answerInput.trim();
    const normalizedAnswer = current.answer.trim();

    if (!normalizedInput) {
      showToast('뜻을 입력해 주세요.', 'info');
      return;
    }

    if (normalizedInput === normalizedAnswer) {
      showToast('정답입니다!', 'success');
      if (nextTimerRef.current) window.clearTimeout(nextTimerRef.current);
      nextTimerRef.current = window.setTimeout(() => {
        goNextQuestion();
      }, TOAST_MS);
      return;
    }

    setAttemptsLeft((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        revealAnswerAndNext();
        return 0;
      }
      showToast(`오답입니다. (${next}/${MAX_ATTEMPTS})`, 'error');
      return next;
    });
  };

  const handleDontKnow = () => {
    revealAnswerAndNext();
  };

  useEffect(() => {
    return () => {
      if (nextTimerRef.current) window.clearTimeout(nextTimerRef.current);
    };
  }, []);

  return (
    <S.QuizLayout>
      <S.QuizHeader>
        {CUR_NUM}/{MAX_NUM}
        <S.IconWrapper>
          <IcClose />
        </S.IconWrapper>
      </S.QuizHeader>
      <S.ProgressBar>
        <S.ProgressFill style={{ width: `${progressPercent}%` }} />
      </S.ProgressBar>
      <S.WordContainer>
        {current.word}
        <S.PronunciationSpan>{current.pronunciation}</S.PronunciationSpan>
        <S.PronunciationAudio>
          <IcVoice />
        </S.PronunciationAudio>
      </S.WordContainer>
      <S.AnswerInput
        placeholder='뜻을 입력하세요'
        value={answerInput}
        onChange={(e) => setAnswerInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
      />
      <S.ButtonField>
        <S.OptionButton>
          <IcHint />
        </S.OptionButton>
        <S.OptionButton
          type='button'
          onClick={handleSubmit}
          disabled={!current || MAX_NUM === 0 || attemptsLeft <= 0}
        >
          <IcSubmit />
        </S.OptionButton>
        <S.OptionButton type='button' onClick={handleDontKnow} disabled={!current || MAX_NUM === 0}>
          <IcWrong />
        </S.OptionButton>
      </S.ButtonField>

      <Toast toast={toast} />
    </S.QuizLayout>
  );
}
