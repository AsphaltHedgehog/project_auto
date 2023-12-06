
// styled
import {StyledHeaderWrapper, StyledNavWrapper, StyledNavList, StyledNavItem, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeaderWrapper className="header">
      <StyledNavWrapper>
        <StyledNavList>
          <StyledNavItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink to="/favorite">Favorites</StyledNavLink>
          </StyledNavItem>
        </StyledNavList>
      </StyledNavWrapper >
    </StyledHeaderWrapper>
  );
}

export default Header;