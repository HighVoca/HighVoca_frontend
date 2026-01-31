import type React from 'react';
import * as S from './SubmitButton.style';

interface SubmitButtonProps {
	children: React.ReactNode;
	isDisable?: boolean;
}

export default function SubmitButton({
	children,
	isDisable,
}: SubmitButtonProps) {
	return (
		<S.SubmitButtonLayout isDisable={isDisable} disabled={isDisable}>
			{children}
		</S.SubmitButtonLayout>
	);
}
