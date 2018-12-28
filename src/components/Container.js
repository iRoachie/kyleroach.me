import styled from 'styled-components';
import { screens } from '../../tailwind';

export default styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: ${screens.md}) {
    & {
      width: 750px;
    }
  }

  @media (min-width: ${screens.lg}) {
    & {
      width: 970px;
    }
  }

  @media (min-width: ${screens.xl}) {
    & {
      width: 1000px;
      max-width: calc(100% - 30px);
    }
  }
`;
