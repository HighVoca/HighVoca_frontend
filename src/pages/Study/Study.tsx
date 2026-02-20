import * as S from './Study.style';
import { useState } from 'react';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import logoImage from '../../assets/svgs/LogoIcon.svg';
import IcSetting from '../../assets/svgs/IcSetting';
import IcRight from '../../assets/svgs/IcRight';

export default function Study() {
  const [testNum, setTestNum] = useState<number>(25);
  return(
    <S.StudyLayout>
      <S.Icon src={logoImage}/>
      <S.SettingContainer>
        <S.Subtext>TODAY'S GOAL</S.Subtext>
        <S.GoalText>
          <S.HighlightSpan>0</S.HighlightSpan>
          /{testNum}
        </S.GoalText>
        <S.SettingButton>
          <S.LeftArea>
            <S.IconWrapper><IcSetting/></S.IconWrapper>
            {testNum}개 학습
          </S.LeftArea>
          <IcRight/>
        </S.SettingButton>
        <SubmitButton>시작</SubmitButton>
      </S.SettingContainer>
    </S.StudyLayout>
  )
}