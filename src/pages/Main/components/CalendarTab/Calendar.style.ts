import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: 50%;
  padding: 1.6rem;
  border-radius: 1.6rem;
  background-color: #141414;
  box-shadow:
    0 20px 40px -12px rgba(0, 0, 0, 0.7),
    0 1px 2px 0 rgba(236, 206, 169, 0.3) inset;

  .react-calendar {
    width: 100%;
    height: 100%;
    border-radius: 1.2rem;
    border: 0.1rem solid rgba(236, 206, 169, 0.3);
    background-color: ${({ theme }) => theme.colors.bgBlack};
    color: #f5f5f5;
  }
  .react-calendar__month-view__weekdays {
    width: 100%;
    flex-direction: row;
  }
  .react-calendar__month-view__days {
    flex-direction: row;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
  }

  .react-calendar__tile {
    max-width: none;
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__navigation {
    flex-direction: row;
  }
  .react-calendar__navigation button {
    color: #eccea9;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus,
  .react-calendar__navigation button:enabled:active {
    background-color: transparent;
    color: #eccea9;
  }

  .react-calendar__tile--active {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #141414;
  }

  .react-calendar__tile--now {
    border-radius: 50%;
    background-color: rgba(236, 206, 169, 0.2);
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile:enabled:active {
    background-color: transparent;
    color: inherit;
    outline: none;
    box-shadow: none;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--active:enabled:active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #141414;
  }
`;
