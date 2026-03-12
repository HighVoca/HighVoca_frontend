import type { Dispatch, SetStateAction } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import * as S from './Calendar.style';

interface CalendarModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  value: unknown;
  onChange: (value: unknown) => void;
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

  return (
    <S.Overlay onClick={handleClose}>
      <S.ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Calendar
          calendarType='gregory'
          value={value as any}
          onChange={onChange as any}
        />
      </S.ModalContainer>
    </S.Overlay>
  );
}
