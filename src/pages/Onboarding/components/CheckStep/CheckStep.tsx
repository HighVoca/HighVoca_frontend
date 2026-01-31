import * as S from './CheckStep.style';
import LogoIcon from '../../../../assets/svgs/LogoIcon.svg';
import LevelButton from '../LevelButton/LevelButton';
import SubmitButton from '../../../../components/SubmitButton/SubmitButton';
import { useState } from 'react';

export default function CheckStep() {
	const [clickedLevel, setClickedLevel] = useState<number>(0);
	const [logoKey, setLogoKey] = useState<number>(0);
	const levels = [
		{
			level: 1,
			icon: '🌱',
			title: '초보예요',
			description: '기초부터 차근차근',
		},
		{
			level: 2,
			icon: '🌿',
			title: '조금은 해요',
			description: '기초는 알고 있어요',
		},
		{
			level: 3,
			icon: '🌳',
			title: '꽤 해요',
			description: '의사소통이 가능해요',
		},
		{
			level: 4,
			icon: '🚀',
			title: '완전 잘해요',
			description: '유창하게 말할 수 있어요',
		},
	];

	return (
		<S.CheckStepLayout>
			<S.Logo key={logoKey} src={LogoIcon} />
			<S.OnboardingTitle>
				반가워요!
				<br />
				<S.HighlightSpan>영어 실력</S.HighlightSpan>을 알려주세요.
			</S.OnboardingTitle>
			<S.OnboargindSubtext>
				실력에 맞게 기초 테스트를 진행할게요.
			</S.OnboargindSubtext>
			{levels.map(({ level, icon, title, description }) => (
				<LevelButton
					key={level}
					level={level}
					icon={icon}
					title={title}
					description={description}
					isClicked={clickedLevel === level}
					setLevel={setClickedLevel}
					setLogoKey={setLogoKey}
				/>
			))}
			<SubmitButton isDisable={clickedLevel === 0}>
				레벨테스트 시작하기
			</SubmitButton>
		</S.CheckStepLayout>
	);
}
