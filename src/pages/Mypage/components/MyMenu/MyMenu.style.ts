import styled from '@emotion/styled';

export const MyMenuLayout = styled.div`
  width: 100%;
  justify-content: flex-start;
  padding: 1rem 2.5rem;
  border-radius: 3.2rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.2);
  background: rgba(19, 24, 66, 0.7);
  box-shadow:
    0 2rem 4rem -1.2rem rgba(0, 0, 0, 0.5),
    0 0.1rem 0.2rem 0 rgba(236, 206, 169, 0.1) inset;
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 6rem;
  gap: 1rem;
  flex-direction: row;
  font-size: 1.6rem;
  font-weight: 600;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(236, 206, 169, 0.2) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export const ButtonField = styled.div`
  margin-left: auto;
`;
