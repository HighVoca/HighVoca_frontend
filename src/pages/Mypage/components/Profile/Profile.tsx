import * as S from './Profile.style';
import profileImage from '../../../../assets/svgs/LogoIcon.svg';

export default function Profile() {
  return (
    <S.ProfileLayout>
      <S.ProfileImage src={profileImage} />
      <S.TextContainer>
        <S.UsernameText>유저이름</S.UsernameText>
        <S.StreakText>🔥12일 연속 학습</S.StreakText>
        <S.LevelBadge>Level: Expert</S.LevelBadge>
      </S.TextContainer>
    </S.ProfileLayout>
  );
}
