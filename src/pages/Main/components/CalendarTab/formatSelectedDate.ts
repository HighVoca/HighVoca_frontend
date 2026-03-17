type CalendarValue = Date | Date[] | null;

const pad2 = (n: number) => String(n).padStart(2, '0');

const isSameLocalDate = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const toSingleDate = (value: CalendarValue): Date | null => {
  if (!value) return null;
  if (value instanceof Date) return value;
  return value[0] ?? null;
};

export function formatSelectedDate(value: CalendarValue): string {
  const date = toSingleDate(value);
  if (!date) return '';

  const today = new Date();
  if (isSameLocalDate(date, today)) return '오늘';

  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

