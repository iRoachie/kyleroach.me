import styled from 'styled-components';
import { screens } from 'tailwindcss/defaultTheme';

export const Page = styled.main.attrs({ className: 'relative bg-white' })`
  margin-bottom: 12rem;

  @media (min-width: ${screens.sm}) {
    margin-bottom: 10rem;
  }
`;

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;

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
      max-width: 100%;
    }
  }
`;
