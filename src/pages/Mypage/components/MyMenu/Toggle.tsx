import * as S from './Toggle.style';
import { useState } from 'react';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <S.ToggleLayout isOn={isOn} onClick={handleToggle}>
      <S.ToggleCircle isOn={isOn} />
    </S.ToggleLayout>
  );
}
