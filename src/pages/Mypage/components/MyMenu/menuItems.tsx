import IcBell from '../../../../assets/svgs/IcBell';
import IcGlobe from '../../../../assets/svgs/IcGlobe';
import IcInfo from '../../../../assets/svgs/IcInfo';
import IcLogout from '../../../../assets/svgs/IcLogout';
import IcQuestion from '../../../../assets/svgs/IcQuestion';

export const menuItems = [
	{
		key: 'progress',
		label: '학습중 진행도 표시',
		icon: <IcInfo />,
		isToggle: true,
	},
	{
		key: 'level',
		label: '단어 레벨 표시',
		icon: <IcInfo />,
		isToggle: true,
	},
	{
		key: 'alarm',
		label: '알림 설정',
		icon: <IcBell />,
		isToggle: false,
	},
	{
		key: 'language',
		label: '언어 설정',
		icon: <IcGlobe />,
		isToggle: false,
	},
	{
		key: 'help',
		label: '도움말',
		icon: <IcQuestion />,
		isToggle: false,
	},
	{
		key: 'logout',
		label: '로그아웃',
		icon: <IcLogout />,
		isToggle: false,
	},
];
