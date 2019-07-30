import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const FolioSquare = ({ project }) => (
  <Container
    to="/"
    className={`folio-square ${project.platforms
      .map(a => a.name.toLowerCase())
      .join(' ')}`}
  >
    <Img sizes={project.thumbnail.fluid} alt={project.title} />

    <Cover>
      <Content>
        <Title>{project.title}</Title>

        <div>
          {project.platforms.map(a => (
            <Platform key={a.id}>{a.name}</Platform>
          ))}
        </div>
      </Content>
    </Cover>
  </Container>
);

const Cover = styled.div.attrs({
  className: 'absolute p-4 flex flex-col justify-center opacity-0',
})`
  transition: opacity 300ms ease-in-out;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0.75rem;
  left: 0.75rem;
  width: calc(100% - 1.5rem);
  height: calc(100% - 1.5rem);

  .touchevents & {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Content = styled.div`
  transition: 200ms ease-in;
  opacity: 0;
  transform: translateY(10px);

  .touchevents & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled(Link).attrs({
  className: 'p-3 block relative overflow-hidden float-left',
})`
  width: 300px;
  height: 300px;

  &:hover {
    ${Cover} {
      opacity: 1;
    }

    ${Content} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h3.attrs({
  className: 'text-white font-semibold mb-2 text-xl',
})``;

const Platform = styled.span.attrs({
  className:
    'bg-primary text-white px-2 py-1 inline-block mx-1 rounded uppercase text-xs font-heading font-bold',
})``;

export default FolioSquare;
