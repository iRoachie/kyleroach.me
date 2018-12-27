import React from 'react';
import styled from 'styled-components';

const SkillContent = styled.div.attrs({ className: 'mb-12' })``;

const SkillTitle = styled.p.attrs({ className: 'font-semibold' })``;

const Skill = ({ title, children }) => (
  <SkillContent>
    {children}
    <SkillTitle>{title}</SkillTitle>
  </SkillContent>
);

export default Skill;
