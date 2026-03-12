import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import IcCalendar from '../../../../assets/svgs/IcCalendar';
import IcLeft from '../../../../assets/svgs/IcLeft';
import IcRight from '../../../../assets/svgs/IcRight';
import * as S from './CalendarTab.style';
import CalendarModal from './Calendar';

type CalendarValue = Date | Date[] | null;

interface CalendarTabProps {
  level: number;
  setLevel: Dispatch<SetStateAction<number>>;
}

export default function CalendarTab({ level, setLevel }: CalendarTabProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<CalendarValue>(new Date());

  const handleDecreaseLevel = () => {
    setLevel((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncreaseLevel = () => {
    setLevel((prev) => (prev < 20 ? prev + 1 : prev));
  };

  return (
    <S.CalendarTabLayout>
      <S.CalendarContainer
        role='button'
        tabIndex={0}
        onClick={() => setIsCalendarOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsCalendarOpen(true);
          }
        }}
      >
        <IcCalendar />
        오늘
      </S.CalendarContainer>
      <S.LevelContainer>
        <button type='button' onClick={handleDecreaseLevel}>
          <IcLeft />
        </button>
        <S.LevelBox>Level {level}</S.LevelBox>
        <button type='button' onClick={handleIncreaseLevel}>
          <IcRight />
        </button>
      </S.LevelContainer>
      <CalendarModal
        isOpen={isCalendarOpen}
        setIsOpen={setIsCalendarOpen}
        value={selectedDate}
        onChange={(value) => setSelectedDate(value)}
      />
    </S.CalendarTabLayout>
  );
}
