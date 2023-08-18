import styled from 'styled-components';

;

export const Cardscontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: none; /* Color de fondo negro */
  border-radius: 30px;
  width: 100%;
  & > *:not(:last-child) {
    margin-right: 30px;
  }
`;


