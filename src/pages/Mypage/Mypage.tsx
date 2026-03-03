import MyMenu from './components/MyMenu/MyMenu';
import Profile from './components/Profile/Profile';
import * as S from './Mypage.style';

export default function Mypage() {
	return (
		<S.MypageLayout>
			<Profile />
			<MyMenu/>
		</S.MypageLayout>
	);
}
