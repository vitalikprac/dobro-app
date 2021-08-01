import styled from 'styled-components';
import { VARIABLES } from '../../../../styles/variables';

export const Main = styled.fieldset`
  width: 90%;
  flex-shrink: 0;
  border: 4px solid ${VARIABLES['primary']};
  border-radius: 12px;
  background-color: white;

  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
  transition: max-height 200ms ease-in-out;
`;

export const Legend = styled.legend`
  padding: 0.2em 0.5em;
  color: ${VARIABLES['primary']};
  font-size: 120%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
