import * as S from './Login.style';
import kakaoLoginButton from '../../assets/images/kakaoLoginButton.png'
import LogoIcon from '../../assets/svgs/LogoIcon.svg';


export default function Login() {
	return (
		<S.Layout>
			<S.LogoContainer>
				<S.LogoIcon src={LogoIcon}/>
				<S.Logo>HighVoca</S.Logo>
				<S.Subtext>친근한 영어 단어 학습 앱</S.Subtext>
			</S.LogoContainer>
			<S.LoginContainer>
				<S.LoginText>
					로그인을 하여 나만의 학습을 시작하세요
				</S.LoginText>
				<S.LoginButton>
					<img src={kakaoLoginButton}/>
				</S.LoginButton>
			</S.LoginContainer>
		</S.Layout>
	);
}
