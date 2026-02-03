import type React from 'react';
import * as S from './SubmitButton.style';

interface SubmitButtonProps {
	children: React.ReactNode;
	isDisable?: boolean;
	onClick: () => void;
}

export default function SubmitButton({
	children,
	isDisable,
	onClick,
}: SubmitButtonProps) {
	return (
		<S.SubmitButtonLayout
			isDisable={isDisable}
			disabled={isDisable}
			onClick={onClick}
		>
			{children}
		</S.SubmitButtonLayout>
	);
}
