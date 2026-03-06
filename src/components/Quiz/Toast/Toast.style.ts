import styled from '@emotion/styled';

export const ToastContainer = styled.div`
  position: fixed;
  left: 50%;
  bottom: 2.4rem;
  transform: translateX(-50%);
  width: calc(100% - 4rem);
  max-width: 42rem;
  z-index: 9999;
  pointer-events: none;
`;

export const Toast = styled.div<{ variant: 'success' | 'error' | 'info' }>`
  width: 100%;
  height: 8rem;
  padding: 1.4rem 1.6rem;
  border-radius: 1.6rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};

  border: 0.1rem solid rgba(236, 206, 169, 0.25);
  background: rgba(5, 7, 26, 0.92);
  backdrop-filter: blur(10px);
  box-shadow: 0 1.2rem 2.4rem rgba(0, 0, 0, 0.45);

  ${({ variant }) =>
    variant === 'success'
      ? `border-color: rgba(230, 131, 105, 0.65);`
      : variant === 'error'
        ? `border-color: rgba(236, 206, 169, 0.65);`
        : `border-color: rgba(255, 255, 255, 0.18);`};
`;
