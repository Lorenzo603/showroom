import { Grid } from "@mui/material";
import Link from "next/link";

const Header = () => {

  return (
    <Grid item xs={12} className="page-header">
        <header>
          <div className="header">
            <a href="/" className="logo header_logo">{process.env.NEXT_PUBLIC_PERSONAL_NAME}</a>
            <div className="header-right">
              <Link href="/#home">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#projects">Projects</Link>
            </div>
          </div>
        </header>
      </Grid>
  );
};

export default Header;