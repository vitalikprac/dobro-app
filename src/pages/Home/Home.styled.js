import styled from 'styled-components';
import { PageWrapper } from '../../styles/Global.styled';

export const HomeWrapper = styled(PageWrapper)`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  align-items: center;
  scroll-padding-top: 100px;
  margin-top: 25%;
  & fieldset:last-child {
    margin-bottom: calc(25% + 1rem);
  }
`;
