import * as S from './NavigateBar.style';
import IcStudy from '../../assets/svgs/IcStudy';
import IcWord from '../../assets/svgs/IcWord';
import IcMy from '../../assets/svgs/IcMy';

export default function NavigateBar() {
	return (
		<S.NavigateBarLayout>
			<S.StudyButton>
				<IcStudy />
				학습
			</S.StudyButton>
			<S.NavigateTab>
				<IcWord />
				단어장
			</S.NavigateTab>
			<S.NavigateTab>
				<IcMy />
				마이페이지
			</S.NavigateTab>
		</S.NavigateBarLayout>
	);
}
