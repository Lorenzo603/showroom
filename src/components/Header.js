import HeaderNavLink from "./HeaderNavLink";

const Header = () => {

  return (
    <div>
      <header>
        <div className="header">
          <nav>
            <div className="hidden sm:flex sm:float-left flex-col sm:flex-row text-left">
              <HeaderNavLink href="/">{process.env.NEXT_PUBLIC_PERSONAL_NAME}</HeaderNavLink>
            </div>

            <div className="sm:float-right flex flex-col sm:flex-row text-left">
              <HeaderNavLink href="/#home">Home</HeaderNavLink>
              <HeaderNavLink href="/#about">About</HeaderNavLink>
              <HeaderNavLink href="/#projects">Projects</HeaderNavLink>
            </div>
          </nav>
        </div>
      </header>

    </div>
  );
};

export default Header;