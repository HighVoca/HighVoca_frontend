import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './Toast.style';

export type ToastVariant = 'success' | 'error' | 'info';

export type ToastState = {
  open: boolean;
  message: string;
  variant: ToastVariant;
};

const DEFAULT_TOAST_MS = 1400;

export function useToast(durationMs: number = DEFAULT_TOAST_MS) {
  const [toast, setToast] = useState<ToastState>({
    open: false,
    message: '',
    variant: 'info',
  });

  const timerRef = useRef<number | null>(null);

  const hideToast = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  const showToast = useCallback(
    (message: string, variant: ToastVariant) => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      setToast({ open: true, message, variant });
      timerRef.current = window.setTimeout(() => {
        setToast((prev) => ({ ...prev, open: false }));
      }, durationMs);
    },
    [durationMs]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return { toast, showToast, hideToast };
}

export default function Toast({ toast }: { toast: ToastState }) {
  if (!toast.open) return null;

  return (
    <S.ToastContainer role='status' aria-live='polite'>
      <S.Toast variant={toast.variant}>{toast.message}</S.Toast>
    </S.ToastContainer>
  );
}

