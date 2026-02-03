import * as S from './ResultStep.style';
import LogoIcon from '../../../../assets/svgs/LogoIcon.svg';
import SubmitButton from '../../../../components/SubmitButton/SubmitButton';

interface ResultStepProps {
	onNext: VoidFunction;
}

export default function ResultStep({ onNext }: ResultStepProps) {
	return (
		<S.ResultStepLayout>
			<S.ResultStepTitle>대단해요! 테스트 완료🎉</S.ResultStepTitle>
			<S.ResultStepSubtitle>분석된 당신의 영어 실력은?</S.ResultStepSubtitle>
			<S.Logo src={LogoIcon} />
			<S.RankContainer>
				<S.RankBox>BEST RANK</S.RankBox>
				<S.RankText>당신은 현재</S.RankText>
				<S.RankHighlight>
					상위 <br />
					9%
				</S.RankHighlight>
				<S.RankText>수준의 실력자입니다!</S.RankText>
			</S.RankContainer>
			<S.DescriptionText>
				실력에 딱 맞는 단어장 구성이 끝났어요!
			</S.DescriptionText>
			<SubmitButton onClick={onNext}>학습 시작하기</SubmitButton>
		</S.ResultStepLayout>
	);
}
