import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Container } from './styles';

const Nav = ({ mode = 'dark' }) => (
  <Section>
    <Container className="mx-auto py-4 flex justify-between items-center">
      <Link to="/">
        <svg width="140" height="40" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              stroke="#333"
              strokeWidth="2.966"
              fill="#FFF"
              d="M54.28 1.483h84.237v37.373H54.28z"
            />
            <path
              d="M66.34 22.151l4.846 6.671h-2.889l-4.47-6.407H63.4v6.407h-2.362V13.169h2.768c2.068 0 3.562.389 4.48 1.166 1.015.865 1.522 2.007 1.522 3.426 0 1.109-.318 2.062-.953 2.86-.636.797-1.474 1.307-2.515 1.53zm-2.94-1.794h.75c2.238 0 3.356-.855 3.356-2.565 0-1.602-1.088-2.403-3.264-2.403H63.4v4.968zm9.003.567c0-2.203.808-4.095 2.423-5.677 1.608-1.581 3.541-2.372 5.799-2.372 2.23 0 4.143.797 5.738 2.392 1.602 1.596 2.403 3.512 2.403 5.749 0 2.25-.805 4.16-2.413 5.728-1.616 1.575-3.565 2.362-5.85 2.362-2.02 0-3.835-.7-5.444-2.099-1.77-1.547-2.656-3.575-2.656-6.083zm2.382.03c0 1.731.582 3.154 1.744 4.269 1.156 1.115 2.49 1.673 4.005 1.673 1.642 0 3.027-.568 4.156-1.703 1.129-1.15 1.693-2.548 1.693-4.198 0-1.669-.557-3.068-1.673-4.197-1.108-1.135-2.48-1.703-4.116-1.703-1.628 0-3.004.568-4.126 1.703-1.122 1.122-1.683 2.508-1.683 4.157zm25.356 4.066h-6.702l-1.743 3.802H89.15l7.745-16.636 7.472 16.636h-2.585l-1.642-3.802zm-.964-2.22l-2.321-5.322-2.433 5.322h4.754zm17.985-8.79v2.798c-1.365-1.142-2.777-1.713-4.237-1.713-1.609 0-2.964.578-4.066 1.734-1.108 1.149-1.662 2.555-1.662 4.217 0 1.643.554 3.028 1.662 4.157 1.109 1.128 2.467 1.693 4.076 1.693.831 0 1.537-.135 2.119-.406a6.11 6.11 0 0 0 1.008-.547c.348-.23.715-.507 1.1-.831v2.848c-1.351.764-2.77 1.146-4.258 1.146-2.237 0-4.146-.78-5.728-2.342-1.574-1.575-2.362-3.474-2.362-5.698 0-1.993.66-3.77 1.977-5.332 1.622-1.913 3.72-2.87 6.296-2.87 1.406 0 2.764.383 4.075 1.146zm5.779 5.282h6.752V13.17h2.362v15.653h-2.362v-7.31h-6.752v7.31h-2.362V13.169h2.362v6.123z"
              fill="#333"
              fillRule="nonzero"
            />
            <g>
              <path
                stroke="#333"
                strokeWidth="2.966"
                fill="#333"
                d="M1.483 1.483H54.28v37.373H1.483z"
              />
              <path
                d="M7.648 19.414l6.093-6.245h3.153l-7.076 7.086 7.117 8.567h-3.163l-5.637-6.965-.487.487v6.478H5.286V13.169h2.362v6.245zm14.558 2.646l-5.11-8.891h2.718l3.579 6.255 3.588-6.255h2.717l-5.13 8.891v6.762h-2.362V22.06zm11.66-8.891v13.433h4.602v2.22h-6.965V13.169h2.362zm15.48 2.22H43.07v3.761h6.093v2.22H43.07v5.232h6.276v2.22h-8.638V13.169h8.638v2.22z"
                fill="#FFF"
                fillRule="nonzero"
              />
            </g>
          </g>
        </svg>
      </Link>

      <Menu>
        <NavItem>
          <NavLink mode={mode} to="/#about">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink mode={mode} to="/#skills">
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink mode={mode} to="/projects">
            Projects
          </NavLink>
        </NavItem>
      </Menu>
    </Container>
  </Section>
);

const Section = styled.nav.attrs({
  className: 'z-10 relative',
})``;

const Menu = styled.ul.attrs({
  className: 'list-reset hidden sm:block',
})``;

const NavItem = styled.li.attrs({
  className: 'inline-block ml-4',
})``;

const NavLink = styled(Link).attrs(({ mode, ...rest }) => ({
  className: `uppercase text-sm font-bold font-heading cursor-pointer  ${
    mode === 'light'
      ? 'hover:text-blue-700'
      : 'text-white opacity-75 hover:opacity-100'
  }`,
  activeClassName: 'text-blue-700',
}))`
  color: var(--primary);
  transition: 300ms ease-in-out;
`;

export default Nav;
