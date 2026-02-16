import * as S from './WordTab.style';
import type { Dispatch, SetStateAction } from 'react';

interface WordTabProps {
	categories: {
		key: string;
		label: string;
	}[];
	clickedItem: string;
	setClickedItem: Dispatch<SetStateAction<string>>;
	size: 'small' | 'large';
}

export default function WordTab({
	categories,
	clickedItem,
	setClickedItem,
	size,
}: WordTabProps) {
	return (
		<S.WordTabLayout size={size}>
			{categories.map(({ key, label }) => (
				<S.WordTabButton
					key={key}
					isClicked={clickedItem === key}
					onClick={() => {
						setClickedItem(key);
					}}
				>
					{label}
				</S.WordTabButton>
			))}
		</S.WordTabLayout>
	);
}
