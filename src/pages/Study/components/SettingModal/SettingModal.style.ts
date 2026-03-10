import styled from '@emotion/styled';

export const SettingModalLayout = styled.div`
  position: fixed;
  z-index: 999;
  width: 90%;
  height: 27rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.bgBlack};
  border-radius: 3.2rem;
  border: 0.1rem solid rgba(236, 206, 169, 0.2);
`;

export const IconWrapper = styled.button`
  height: 3.4rem;
  margin-left: auto;
  border: 0.1rem solid rgba(236, 206, 169, 0.2);
  border-radius: 50%;
`;
