import { Grid } from "@mui/material";
import Link from "next/link";

const Header = () => {

  return (
    <Grid item xs={12} className="page-header">
      <header>
        <div style={{ width: "75%" }}>
          <div className="header">
            <Link href="/">{process.env.NEXT_PUBLIC_PERSONAL_NAME}</Link>
            <div className="header-right">
              <Link href="/#home">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#projects">Projects</Link>
            </div>
          </div>
        </div>
      </header>

    </Grid>
  );
};

export default Header;