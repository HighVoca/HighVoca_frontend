import IcClose from '../../../../assets/svgs/IcClose';
import * as S from './SettingModal.style';
import type { Dispatch, SetStateAction } from 'react';
import TestWheelPicker from './TestWheelPicker';
interface SettingModalProps {
  testNum: number;
  onClose: Dispatch<SetStateAction<boolean>>;
  onTestNum: Dispatch<SetStateAction<number>>;
}

export default function SettingModal({
  testNum,
  onClose,
  onTestNum,
}: SettingModalProps) {
  const handleClose = () => {
    onClose(false);
  };

  return (
    <S.SettingModalLayout>
      <S.IconWrapper onClick={handleClose}>
        <IcClose />
      </S.IconWrapper>
      <TestWheelPicker testNum={testNum} onTestNum={onTestNum} />
    </S.SettingModalLayout>
  );
}
