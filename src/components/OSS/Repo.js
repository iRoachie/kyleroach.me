import React from 'react';
import styled from 'styled-components';
import thousands from 'thousands';

const Repo = ({ repo }) => (
  <Content>
    <header>
      <Name href={repo.url} target="_blank" rel="noopener">
        {repo.name}
      </Name>
      <Description>{repo.description}</Description>
    </header>

    <Meta>
      <Language
        language={repo.primaryLanguage.name}
        color={repo.primaryLanguage.color}
      >
        {repo.primaryLanguage.name}
      </Language>

      <Stars>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#fff"
            d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z"
          />
        </svg>
        {thousands(repo.stargazers.totalCount)}
      </Stars>
    </Meta>
  </Content>
);

const Content = styled.article.attrs({
  className: 'p-2 text-left flex flex-col justify-between',
})`
  border: 1px solid rgba(51, 51, 51, 0.4);
  height: 130px;
`;

const Name = styled.a.attrs({
  className: 'font-semibold text-black',
})``;

const Description = styled.p.attrs({
  className: 'text-xs',
})``;

const Meta = styled.footer.attrs({
  className: 'flex items-center',
})``;

const Language = styled.span.attrs({
  className: 'text-xs font-semibold px-2 py-1 rounded inline-block',
})`
  background-color: ${({ language, color }) =>
    assignBackgroudColor(language, color)};
  color: ${({ language }) => assignColor(language)};
`;

const assignColor = language => {
  switch (language) {
    case 'JavaScript':
      return '#000';
    case 'Objective-C':
      return '#0366d6';
    default:
      return '#fff';
  }
};

const assignBackgroudColor = (language, color) => {
  switch (language) {
    case 'Objective-C':
      return '#f1f8ff';
    default:
      return color;
  }
};

const Stars = styled.span.attrs({
  className:
    'ml-1 bg-primary text-white font-semibold rounded text-xs px-1 py-1 rounded inline-flex items-center',
})`
  svg {
    height: 14px;
    margin-right: 2px;
  }
`;

export default Repo;
