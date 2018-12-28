import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';

import Container from './Container';
import logoJPG from '../images/logo.jpg';
import logoWebp from '../images/logo.webp';

export default () => (
  <Nav>
    <Container className="mx-auto py-4 flex justify-between items-center">
      <Link to="/">
        <Logo>
          <source srcSet={logoWebp} type="image/webp" />
          <img src={logoJPG} alt="Kyle Roach" />
        </Logo>
      </Link>

      <Menu>
        <NavItem>
          <NavLink to="top">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="skills">Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Contact</NavLink>
        </NavItem>
      </Menu>
    </Container>
  </Nav>
);

const Nav = styled.nav.attrs({
  className: 'z-10 relative',
})``;

const Logo = styled.picture`
  img {
    height: 40px;
    width: 140px;
  }
`;

const Menu = styled.ul.attrs({
  className: 'list-reset hidden sm:block',
})``;

const NavItem = styled.li.attrs({
  className: 'inline-block ml-4',
})``;

const NavLink = styled(ScrollLink).attrs({
  className: 'uppercase text-sm font-bold font-heading cursor-pointer',
  smooth: true,
  duration: 300,
})`
  transition: color 300ms ease-in-out;
  color: var(--primary);

  &:hover {
    color: #fff;
  }
`;
