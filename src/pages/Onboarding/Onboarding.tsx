import * as S from './Onboarding.style';
import { useState } from 'react';
import CheckStep from './components/CheckStep/CheckStep';
import ResultStep from './components/ResultStep/ResultStep';
import { useNavigate } from 'react-router';

type OnboardingStepType = 'check' | 'test' | 'result';

export default function Onboarding() {
	const [curStep, setCurStep] = useState<OnboardingStepType>('check');
	const navigate = useNavigate();
	const steps = [
		{
			step: 'check',
			Component: CheckStep,
			handleNext: () => setCurStep('result'),
		},
		{
			step: 'test',
			Component: CheckStep,
			handleNext: () => setCurStep('result'),
		},
		{
			step: 'result',
			Component: ResultStep,
			handleNext: () => navigate('/main'),
		},
	];
	const currentStep = steps.find((s) => s.step === curStep);

	return (
		<S.OnboadingLayout>
			{currentStep && <currentStep.Component onNext={currentStep.handleNext} />}
		</S.OnboadingLayout>
	);
}
