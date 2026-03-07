import * as S from './Main.style';
import { useState } from 'react';
import WordTab from './components/WordTab/WordTab';
import WordCard from './components/WordCard/WordCard';

export default function Main() {
  const [clickedCategory, setClickedCategory] = useState<string>('learned');
  const [clickedLanguage, setClickedLanguage] = useState<string>('All');
  const wordCategories = [
    {
      key: 'learned',
      label: '학습한 단어',
    },
    {
      key: 'all',
      label: '모든 단어',
    },
    {
      key: 'wrong',
      label: '틀린 단어',
    },
  ];
  const languageCategories = [
    {
      key: 'English',
      label: '영어만',
    },
    {
      key: 'Korean',
      label: '한글만',
    },
    {
      key: 'All',
      label: '모두',
    },
  ];

  const mockData = [
    {
      meaning: '사과',
      spelling: 'apple',
      isWrong: false,
    },
    {
      meaning: '행복한',
      spelling: 'happy',
      isWrong: false,
    },
    {
      meaning: '아름다운',
      spelling: 'beautiful',
      isWrong: true,
    },
    {
      meaning: '산',
      spelling: 'mountain',
      isWrong: false,
    },
    {
      meaning: '도서관',
      spelling: 'library',
      isWrong: false,
    },
  ];

  return (
    <S.MainLayout>
      <S.TabContainer>
        <WordTab
          categories={wordCategories}
          clickedItem={clickedCategory}
          setClickedItem={setClickedCategory}
          size='large'
        />
        <WordTab
          categories={languageCategories}
          clickedItem={clickedLanguage}
          setClickedItem={setClickedLanguage}
          size='small'
        />
      </S.TabContainer>
      {mockData.map(({ meaning, spelling, isWrong }) => (
        <WordCard
          key={`${clickedCategory}-${clickedLanguage}-${spelling}`}
          meaning={meaning}
          spelling={spelling}
          isWrong={isWrong}
          languageType={clickedLanguage}
        />
      ))}
    </S.MainLayout>
  );
}
