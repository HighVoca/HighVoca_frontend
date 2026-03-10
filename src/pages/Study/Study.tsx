import * as S from './Study.style';
import { useState } from 'react';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import logoImage from '../../assets/svgs/LogoIcon.svg';
import IcSetting from '../../assets/svgs/IcSetting';
import IcRight from '../../assets/svgs/IcRight';
import Quiz from '../../components/Quiz/Quiz';
import SettingModal from './components/SettingModal/SettingModal';

export default function Study() {
  const [testNum, setTestNum] = useState<number>(25);
  const [isStarted, setIsStarted] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isStarted) {
    return (
      <Quiz
        maxNum={testNum}
        onClose={() => setIsStarted(false)}
        onFinish={() => setIsStarted(false)}
      />
    );
  }

  return (
    <S.StudyLayout>
      {isOpen && (
        <SettingModal
          onClose={setIsOpen}
          testNum={testNum}
          onTestNum={setTestNum}
        />
      )}
      <S.Icon src={logoImage} />
      <S.SettingContainer>
        <S.Subtext>TODAY'S GOAL</S.Subtext>
        <S.GoalText>
          <S.HighlightSpan>0</S.HighlightSpan>/{testNum}
        </S.GoalText>
        <S.SettingButton onClick={() => setIsOpen(true)}>
          <S.LeftArea>
            <S.IconWrapper>
              <IcSetting />
            </S.IconWrapper>
            {testNum}개 학습
          </S.LeftArea>
          <IcRight />
        </S.SettingButton>
        <SubmitButton onClick={() => setIsStarted(true)}>시작</SubmitButton>
      </S.SettingContainer>
      <S.InfoContainer>
        <S.InfoBox>
          <S.InfoSpan>324</S.InfoSpan>
          학습 단어
        </S.InfoBox>
        <S.InfoBox>
          <S.InfoSpan>324</S.InfoSpan>
          정확도
        </S.InfoBox>
        <S.InfoBox>
          <S.InfoSpan>324</S.InfoSpan>
          학습일
        </S.InfoBox>
      </S.InfoContainer>
    </S.StudyLayout>
  );
}
