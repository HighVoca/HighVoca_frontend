import type { Dispatch, SetStateAction } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as S from './CalendarModal.style';
import IcClose from '../../../../assets/svgs/IcClose';

interface CalendarModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  value: Date | Date[] | null;
  onChange: (value: Date | Date[] | null) => void;
}

export default function CalendarModal({
  isOpen,
  setIsOpen,
  value,
  onChange,
}: CalendarModalProps) {
  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelect = (nextValue: any) => {
    onChange(nextValue as Date | Date[] | null);
    setIsOpen(false);
  };

  return (
    <S.Overlay onClick={handleClose}>
      <S.ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <S.ButtonWrapper onClick={handleClose}>
          <IcClose />
        </S.ButtonWrapper>

        <Calendar
          calendarType='gregory'
          maxDate={new Date()}
          value={value as any}
          onChange={handleSelect}
        />
      </S.ModalContainer>
    </S.Overlay>
  );
}
