import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
          <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Projects</NavLink>
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

const NavLink = styled.button.attrs({
  className: 'uppercase text-sm font-bold font-heading',
})`
  transition: color 300ms ease-in-out;
  color: var(--primary);

  &:hover {
    color: #fff;
  }
`;
