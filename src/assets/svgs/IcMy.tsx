type ActiveType = {
  isActive: boolean;
};

const IcMy = ({isActive}: ActiveType) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
	>
		<path
			d='M18.992 20.9913V18.9921C18.992 17.9317 18.5707 16.9147 17.8209 16.1649C17.0711 15.415 16.0541 14.9938 14.9936 14.9938H8.99614C7.93571 14.9938 6.91872 15.415 6.16889 16.1649C5.41905 16.9147 4.9978 17.9317 4.9978 18.9921V20.9913'
			stroke={isActive ? '#E68369' : '#ECCEA9'}
			strokeWidth='1.99917'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9949 10.9954C14.2031 10.9954 15.9933 9.20533 15.9933 6.99711C15.9933 4.78889 14.2031 2.99878 11.9949 2.99878C9.7867 2.99878 7.99658 4.78889 7.99658 6.99711C7.99658 9.20533 9.7867 10.9954 11.9949 10.9954Z'
			stroke={isActive ? '#E68369' : '#ECCEA9'}
			strokeWidth='1.99917'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export default IcMy;
