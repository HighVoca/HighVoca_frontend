import * as S from './MyMenu.style';
import { menuItems } from './menuItems';
import IcRight from '../../../../assets/svgs/IcRight';
import Toggle from './Toggle';

export default function MyMenu() {
  return (
    <S.MyMenuLayout>
      {menuItems.map(({ key, label, icon, isToggle }) => (
        <S.MenuItem key={key}>
          {icon}
          {label}
          <S.ButtonField>{isToggle ? <Toggle /> : <IcRight />}</S.ButtonField>
        </S.MenuItem>
      ))}
    </S.MyMenuLayout>
  );
}
