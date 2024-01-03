import { Grid } from "@mui/material";
import Link from "next/link";

const Header = () => {

  return (
    <Grid container justifyContent="flex-end" alignItems="flex-end">
      <Grid item xs={1}><Link className="header_link" href="/about">About</Link></Grid>
      <Grid item xs={1}><Link className="header_link" href="/about">About</Link></Grid>
      <Grid item xs={1}><Link className="header_link" href="/about">About</Link></Grid>
    </Grid>
  );
};

export default Header;