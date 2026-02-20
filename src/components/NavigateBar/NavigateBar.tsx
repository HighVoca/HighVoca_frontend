import * as S from './NavigateBar.style';
import { useNavigate, useLocation } from 'react-router';
import IcStudy from '../../assets/svgs/IcStudy';
import IcWord from '../../assets/svgs/IcWord';
import IcMy from '../../assets/svgs/IcMy';

export default function NavigateBar() {
	const navigate = useNavigate();
	const location = useLocation();
	const lastSegment = location.pathname.split('/').pop();
	console.log(lastSegment);

	const handleStudy = () => {
		navigate('/study');
	};
	const handleWord = () => {
		navigate('/main');
	};	
	const handleMy = () => {
		navigate('/mypage');
	};

	return (
		<S.NavigateBarLayout>
			<S.StudyButton onClick={handleStudy}>
				<IcStudy />
				학습
			</S.StudyButton>
			<S.NavigateTab onClick={handleWord}>
				<IcWord isActive={lastSegment==='main'}/>
				단어장
			</S.NavigateTab>
			<S.NavigateTab onClick={handleMy}>
				<IcMy isActive={lastSegment==='mypage'}/>
				마이페이지
			</S.NavigateTab>
		</S.NavigateBarLayout>
	);
}
