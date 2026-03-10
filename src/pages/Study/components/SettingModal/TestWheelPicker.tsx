import {
  WheelPicker,
  WheelPickerWrapper,
  type WheelPickerOption,
} from '@ncdai/react-wheel-picker';
import './TestWheelPicker.css';
import type { Dispatch, SetStateAction } from 'react';

interface TestWheelPickerProps {
  testNum: number;
  onTestNum: Dispatch<SetStateAction<number>>;
}

export default function TestWheelPicker({
  testNum,
  onTestNum,
}: TestWheelPickerProps) {
  const createArray = (length: number, add = 0): WheelPickerOption<number>[] =>
    Array.from({ length }, (_, i) => {
      const value = i + add;
      return {
        label: value.toString().padStart(2, '0'),
        value: value,
      };
    });
  const options = createArray(50);

  return (
    <WheelPickerWrapper>
      <WheelPicker
        options={options}
        value={testNum}
        optionItemHeight={50}
        visibleCount={24}
        onValueChange={onTestNum}
      />
    </WheelPickerWrapper>
  );
}
