import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { Container } from '../styles';
import FolioSquare from './FolioSquare';

const titles = ['all', 'web', 'mobile', 'api'];

const Portfolio = () => {
  const [active, setActive] = useState('all');
  const grid = useRef();

  useEffect(() => {
    /*
     * We have to do this because this package uses window,
     * and it will fail in gatsby build.
     */
    import('isotope-layout').then(Isotope => {
      grid.current = new Isotope.default(
        document.querySelector('.folio-content'),
        {
          itemSelector: '.folio-square',
          getSortData: {
            category: '[data-category]',
          },
          layoutMode: 'masonry',
          masonry: {
            isFitWidth: true,
          },
        }
      );
    });
  }, []);

  const data = useStaticQuery(graphql`
    {
      allContentfulProject {
        edges {
          node {
            id
            title
            thumbnail {
              fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
            platforms {
              id
              name
            }
          }
        }
      }
    }
  `);

  const makeActive = a => {
    const filter = a === 'all' ? '*' : `.${a}`;

    setActive(a);
    grid.current.arrange({ filter });
  };

  console.log(data);

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
              onClick={() => makeActive(a)}
            >
              {a}
            </FolioTitle>
          ))}
        </FolioTitles>

        <FolioContent>
          {data.allContentfulProject.edges.map(({ node }) => (
            <FolioSquare key={node.id} project={node} />
          ))}
        </FolioContent>
      </Container>
    </Content>
  );
};

const Content = styled.section.attrs({
  className: 'pt-8 pb-16 text-center text-white bg-primary',
})``;

const Title = styled.h2.attrs({
  className: 'text-2xl my-4 font-light uppercase',
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

const Sub = styled.p.attrs({ className: 'mx-auto lg:w-2/3' })``;

export default Portfolio;
