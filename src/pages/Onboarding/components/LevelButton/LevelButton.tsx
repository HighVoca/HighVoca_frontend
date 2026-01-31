import type { Dispatch, SetStateAction } from 'react';
import * as S from './LevelButton.style';
import IcCheck from '../../../../assets/svgs/IcCheck';

interface LevelButtonProps {
	level: number;
	icon: string;
	title: string;
	description: string;
	isClicked: boolean;
	setLevel: Dispatch<SetStateAction<number>>;
	setLogoKey: Dispatch<SetStateAction<number>>;
}

export default function LevelButton({
	level,
	icon,
	title,
	description,
	isClicked,
	setLevel,
	setLogoKey,
}: LevelButtonProps) {
	const handleLevel = () => {
		setLevel(level);
		setLogoKey((prev) => prev + 1);
	};

	return (
		<S.LevelButtonLayout onClick={handleLevel} isClicked={isClicked}>
			<S.LevelIcon isClicked={isClicked}>{icon}</S.LevelIcon>
			<S.TextContainer>
				<S.LevelText>{title}</S.LevelText>
				<S.LevelDescription>{description}</S.LevelDescription>
			</S.TextContainer>
			{isClicked && (
				<S.CheckBox>
					<IcCheck />
				</S.CheckBox>
			)}
		</S.LevelButtonLayout>
	);
}
