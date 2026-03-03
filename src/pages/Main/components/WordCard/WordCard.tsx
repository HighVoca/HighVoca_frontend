import * as S from './WordCard.style';
import { useState } from 'react';

interface WordCardProps {
	meaning: string;
	spelling: string;
	isWrong: boolean;
	languageType: string;
}

export default function WordCard({
	meaning,
	spelling,
	isWrong,
	languageType,
}: WordCardProps) {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const handleClick = () => {
		setIsClicked((prev) => !prev);
	};

	return (
		<S.WordCardLayout>
			<S.TextContainer>
				{(() => {
					switch (languageType) {
						case 'All':
							return (
								<>
									<S.MainText>{spelling}</S.MainText>
									<S.SubText>{meaning}</S.SubText>
								</>
							);
						case 'English':
							return (
								<>
									<S.MainText>{spelling}</S.MainText>
									{isClicked ? (
										<S.SubText>{meaning}</S.SubText>
									) : (
										<S.SpellingButton onClick={handleClick}>
											탭해서 단어 보기
										</S.SpellingButton>
									)}
								</>
							);
						case 'Korean':
							return (
								<>
									<S.MainText>{meaning}</S.MainText>
									{isClicked ? (
										<S.SubText>{spelling}</S.SubText>
									) : (
										<S.SpellingButton onClick={handleClick}>
											탭해서 스펠링 보기
										</S.SpellingButton>
									)}
								</>
							);
					}
				})()}
			</S.TextContainer>
			<S.SupportContainer>
				{isWrong && <S.WrongBadge>틀림</S.WrongBadge>}
			</S.SupportContainer>
		</S.WordCardLayout>
	);
}
