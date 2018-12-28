import React from 'react';
import styled from 'styled-components';
import { screens } from '../../../tailwind';

import { Container } from '../styles';
import FolioSquare from './FolioSquare';

class Portfolio extends React.Component {
  state = {
    active: 'all',
    titles: ['all', 'web', 'mobile'],
  };

  componentDidMount() {
    import('isotope-layout/js/isotope').then(Isotope => {
      const grid = document.querySelector('.folio-content');

      this.grid = new Isotope.default(grid, {
        itemSelector: '.folio-square',
        getSortData: {
          category: '[data-category]',
        },
        layoutMode: 'masonry',
        masonry: {
          isFitWidth: true,
        },
      });
    });
  }

  makeActive = a => {
    const filter = a === 'all' ? '*' : `.${a}`;

    this.setState({ active: a });
    this.grid.arrange({ filter });
  };

  render() {
    const { titles, active } = this.state;
    const { projects } = this.props;

    return (
      <Content>
        <Container>
          <Title>
            My <span>Portfolio</span>
          </Title>

          <Sub>
            Each project brings its own challenges and expectations. Both on the
            web and on mobile, I've been instrumental in helping clients solve
            their problems.
          </Sub>

          <FolioTitles>
            {titles.map(a => (
              <FolioTitle
                active={active === a}
                key={a}
                onClick={() => this.makeActive(a)}
              >
                {a}
              </FolioTitle>
            ))}
          </FolioTitles>

          <FolioContent>
            {projects.map(({ node }) => (
              <FolioSquare key={node.id} project={node} />
            ))}
          </FolioContent>
        </Container>
      </Content>
    );
  }
}

const Content = styled.section.attrs({
  className: 'pt-8 pb-16 text-center text-white bg-primary',
})``;

const Title = styled.h2.attrs({
  className: 'my-4 font-light uppercase',
})`
  span {
    font-weight: 600;
  }
`;

const FolioTitles = styled.div.attrs({ className: 'my-10' })``;

const FolioTitle = styled.button.attrs({
  className: 'text-white font-bold uppercase cursor-pointer font-heading',
})`
  padding: 6px 10px;
  border: 2px solid ${({ active }) => (active ? '#fff' : 'transparent')};
  font-size: 14px;
  margin: 0 8px;
  transition: 200ms ease-in-out;
`;

const FolioContent = styled.div.attrs({ className: 'folio-content' })`
  margin: 30px auto 0;
`;

const Sub = styled.p.attrs({ className: 'mx-auto' })`
  @media (min-width: ${screens.lg}) {
    max-width: 66%;
  }
`;

export default Portfolio;
