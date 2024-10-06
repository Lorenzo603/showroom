import Link from "next/link";
import HeaderNavLink from "./HeaderNavLink";

const Header = () => {

  return (
    <div>
      <header>
        <div className="header">
          <nav>
            <span className="hidden sm:inline
              float-left text-slate-50 text-center text-lg font-bold uppercase p-6 hover:text-slate-900 hover:bg-slate-50">
              <Link href="/">{process.env.NEXT_PUBLIC_PERSONAL_NAME}</Link>
            </span>
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